package tech.geocodeapp.geocode.image.service;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import tech.geocodeapp.geocode.image.exceptions.InvalidRequestException;
import tech.geocodeapp.geocode.image.exceptions.NotFoundException;
import tech.geocodeapp.geocode.image.model.Image;
import tech.geocodeapp.geocode.image.repository.ImageRepository;
import tech.geocodeapp.geocode.image.request.CreateImageRequest;
import tech.geocodeapp.geocode.image.request.GetImageBytesRequest;
import tech.geocodeapp.geocode.image.response.CreateImageResponse;
import tech.geocodeapp.geocode.image.response.GetImageBytesResponse;

import java.io.IOException;
import java.util.UUID;

@Validated
@Service( "ImageService" )
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepo;

    public ImageServiceImpl( ImageRepository imageRepo ) {
        this.imageRepo = imageRepo;
    }

    @Override
    public CreateImageResponse createImage( CreateImageRequest request ) throws InvalidRequestException {
        if ( request == null ) {
            throw new InvalidRequestException( "No request object provided" );
        }
        if ( request.getImageData() == null ) {
            throw new InvalidRequestException( "Invalid image provided" );
        }


        try {
            Image image = new Image( UUID.randomUUID(), request.getImageData() );
            this.imageRepo.save( image );
            return new CreateImageResponse( true, "The image was successfully uploaded", image.getId() );

        } catch ( IOException e ) {
            return new CreateImageResponse();
        }
    }

    @Override
    public GetImageBytesResponse getImageBytes(GetImageBytesRequest request ) throws InvalidRequestException, NotFoundException {
        if ( request == null ) {
            throw new InvalidRequestException( "No request object provided" );
        }
        if ( request.getImageID() == null ) {
            throw new InvalidRequestException("Invalid image ID provided");
        }

        try {
            byte[] bytes = this.imageRepo.getBytesById(request.getImageID());
            return new GetImageBytesResponse(true, "Image returned", bytes);

        } catch ( IOException e ) {
            return new GetImageBytesResponse(false, "Image not found", null);
        }
    }
}