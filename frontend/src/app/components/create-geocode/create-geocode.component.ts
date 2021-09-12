import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CreateGeoCodeRequest, CreateGeoCodeResponse, GeoCodeService, GeoPoint} from '../../services/geocode-api';
import {ModalController,  ToastController} from '@ionic/angular';
import {GoogleMapsLoader} from '../../services/GoogleMapsLoader';
import {input} from '@ionic/cli/lib/color';
import {QRGenerator} from '../../services/QRGenerator';

let map;
@Component({
  selector: 'app-create-geocode',
  templateUrl: './create-geocode.component.html',
  styleUrls: ['./create-geocode.component.scss'],
})
export class CreateGeocodeComponent implements AfterViewInit {
  @ViewChild('mapElement',{static:false}) mapElement;
  @Input() eventGeoCode: false;
  googleMaps;
  locations;
  mapOptions;
  hints = [];
  difficulty;
  marker;
  geoLocation: GeoPoint={latitude:0,longitude:0};
//Request object to be updated as fields change
  request: CreateGeoCodeRequest= {
    description: '',
    available: true,
    difficulty:'EASY',
    hints:[],
    location:{latitude:0,longitude:0}
  };
  constructor(private qrGenerator: QRGenerator,
              private toastController: ToastController,
              private geocodeAPI: GeoCodeService,
              private modalController: ModalController,
              private mapsLoader: GoogleMapsLoader) {}

  //create map
  initMap() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.mapOptions = {
        center: {lat: position.coords.latitude, lng: position.coords.longitude},
        zoom: 15,
      };
      // Create a map after the view is ready and the native platform is ready.


      map = new this.googleMaps.Map(this.mapElement.nativeElement, this.mapOptions);

      //Add event listeners to map
      this.googleMaps.event.addListener(map, 'click', (event)=>{
        this.placeMarker(event.latLng);
      });
    }, (positionError) => {
      this.mapOptions = {
        center: {lat: -25.75625115327836, lng: 28.235629260918344},
        zoom: 15,
      };
      // Create a map after the view is ready and the native platform is ready.


      map = new this.googleMaps.Map(this.mapElement.nativeElement, this.mapOptions);

      //Add event listeners to map
      this.googleMaps.event.addListener(map, 'click', (event)=>{
        this.placeMarker(event.latLng);
      });
    });



  };

  //create map
  ngAfterViewInit(): void {
    this.mapsLoader.load().then(handle => {
      this.googleMaps = handle;
      this.initMap();
    }).catch();
  }

  //update the description field for the request
  updateRequest(e: any, field: ('description')){
    this.request[field] = e.target.value;
  }

  //create the geocode and update the remaining fields
  async createGeoCode(){
    if(this.eventGeoCode){
      this.locations=this.marker.getPosition();
      this.request.location.longitude=this.locations.lng();
      this.request.location.latitude=this.locations.lat();
      this.request.hints=this.hints;
      this.request.difficulty = this.difficulty;
      this.dismiss(this.request);
    }else{
      this.geocodeAPI.createGeoCode(this.request).subscribe(async (response: CreateGeoCodeResponse) =>{
        if(!response.success){
          const toast =  await this.toastController.create({
            message: 'Error creating geocode ',
            duration: 2000
          });
          await toast.present();
          this.dismiss(null);
        }else{
          const toast =  await this.toastController.create({
            message: 'GeoCode created',
            duration: 2000
          });
          await toast.present();
          this.qrGenerator.download(response.qrCode);
          this.dismiss(null);
        }
      });
    }
  }
  async dismiss(req) {
    await this.modalController.dismiss(req);
  }

  //update difficulty field for request
  updateDifficulty(event){
    this.difficulty=event;
  }

  //update hints array with profile input
  updateHints(event){
    this.hints.push(event.target.value);
  }

  //Place map marker based on user click listener
  placeMarker(location){
    this.marker = new this.googleMaps.Marker({
        map,
        animation: this.googleMaps.Animation.DROP,
        position: location
      }
    );
   // map.setCenter(location);
  }

}
