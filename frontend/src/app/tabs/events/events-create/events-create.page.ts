import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CreateGeoCodeResponse, GeoCode, GeoCodeService} from '../../../services/geocode-api';
import {ModalController, NavController, ToastController} from '@ionic/angular';
import {GoogleMapsLoader} from '../../../services/GoogleMapsLoader';
import {CreateGeocodeComponent} from './create-geocode/create-geocode.component';
import {EventLocationComponent} from "./event-location/event-location.component";

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.page.html',
  styleUrls: ['./events-create.page.scss'],
})
export class EventsCreatePage implements AfterViewInit  {
  @ViewChild('mapElement',{static:false}) mapElement;
  googleMaps;
  mapOptions;
  map;
  mapMarker;
  markers= [];
  geocodes: GeoCode[] = [];
  selected=[];
  isHidden=true;
  type='event';
  timeHidden=true;
  challengeHidden=true;
  height='0%';
  constructor(      private modalController: ModalController,
                    private navCtrl: NavController,
                    private geocodeApi: GeoCodeService,
                    private mapsLoader: GoogleMapsLoader,
                    private toastController: ToastController) { }

  //Create map and add mapmarkers of geocodes
  loadMap(){
    this.markers= [];
    this.mapOptions = {
      center: {lat: -25.75625115327836, lng: 28.235629260918344},
      zoom: 15,
    };
    this.map = new this.googleMaps.Map(this.mapElement.nativeElement,this.mapOptions);

  }

  async ngAfterViewInit() {
    this.googleMaps = await this.mapsLoader.load();
    this.loadMap();
  }

  async createGeoCode() {
    const modal = await this.modalController.create({
      component: CreateGeocodeComponent,
      swipeToClose: true,
      componentProps: {}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null) {
      this.geocodeApi.createGeoCode(data)
        .subscribe(async (response: CreateGeoCodeResponse) =>{
            const toast =  await this.toastController.create({
              message: 'GeoCode Created',
              duration: 2000
            });
            await toast.present();

        });
    }else{
      console.log('Null');
    }
  }

  async selectLocation(){
    const modal = await this.modalController.create({
      component: EventLocationComponent,
      swipeToClose: true,
      componentProps: {}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null) {
    console.log(data.getPosition().lat());
    }else{
      console.log('Null');
    }
  }

  eventType($event){
    console.log($event.detail.value);
    this.type=$event.detail.value;
    if($event.detail.value =='timetrial'){
      this.challengeHidden=true;
      this.timeHidden=false;
    }else if($event.detail.value == 'challenge'){
      this.challengeHidden=false;
      this.timeHidden=true;
    }else{
      this.timeHidden=true;
      this.challengeHidden=true;
    }
  }

}
