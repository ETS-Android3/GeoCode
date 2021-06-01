package tech.geocodeapp.geocode.GeoCode.Service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import org.springframework.stereotype.Service;

import io.swagger.model.*;
import tech.geocodeapp.geocode.GeoCode.Exceptions.InvalidRequestException;
import tech.geocodeapp.geocode.GeoCode.Exceptions.QRCodeException;
import tech.geocodeapp.geocode.GeoCode.Exceptions.RepoException;
import tech.geocodeapp.geocode.GeoCode.Repository.GeoCodeRepository;


import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.ListIterator;


/**
 * This class implements the UserService interface
 */
@Service
public class GeoCodeServiceImpl implements GeoCodeService {

    /**
     * The repository the GeoCode class interacts with
     */
    private final GeoCodeRepository geoCodeRepo;

    /**
     * Constructor
     *
     * @param geoCodeRepo the repo the created response attributes should save to
     */
    public GeoCodeServiceImpl( GeoCodeRepository geoCodeRepo ) {

        this.geoCodeRepo = geoCodeRepo;
    }

    /**
     * Create a new GeoCode and store it in the GeoCodeRepository
     *
     * @param request the attributes the response should be created from
     *
     * @return the newly create response instance from the specified CreateGeoCodeRequest
     *
     * @throws InvalidRequestException the provided request was invalid and resulted in an error being thrown
     * @throws QRCodeException an error occurred when attempting to create the QR Image
     */
    @Override
    public CreateGeoCodeResponse createGeoCode( CreateGeoCodeRequest request ) throws InvalidRequestException, QRCodeException {

        /** Validate the request */
        if ( request == null ) {

            throw new InvalidRequestException( "An error occurred." );
        }

        GeoCode newGeoCode = new GeoCode();
        // ToDo: need to get and set the ID
        newGeoCode.setAvailable( request.isAvailable() );
        newGeoCode.setDescription( request.getDescription() );
        newGeoCode.setDifficulty( request.getDifficulty() );
        newGeoCode.setHints( request.getHints() );
        newGeoCode.setLocation( request.getLocation() );

        // ToDo: need to get and set the QR Code => how will this be generated
        /** Try and create the relevant image with the newly create GeoCode instance */
        try {

            /** Create the image with the specified name */
            createQR( "QRCode" );
        } catch ( IOException | WriterException e ) {

            throw new QRCodeException( "The QR Code could not be created." );
        }

        // ToDo: need to save to the repo

        CreateGeoCodeResponse response = new CreateGeoCodeResponse();
        response.setGeoCode( newGeoCode );

        return response;
    }

    /**
     * Get all the stored GeoCodes in the Repo
     *
     * @param request the attributes the response should be created from
     *
     * @return the newly create response instance from the specified GetAllGeoCodesRequest
     *
     * @throws RepoException there was an issue accessing the repository
     */
    @Override
    public GetGeoCodesResponse getAllGeoCode( GetGeoCodesRequest request ) throws RepoException {

        /** Validate the repo */
        if ( geoCodeRepo == null ) {

            throw new RepoException( "The GeoCode Repository is empty." );
        }

        /*ListIterator< GeoCode > it;
        ArrayList< GeoCode > allGeoCodes = new ArrayList<>();

        while ( it.hasNext() ) {

            allGeoCodes.add( ( GeoCode ) it );
            it.next();
        }*/

        return new GetGeoCodesResponse();
    }



    /**
     * This helper function helps create the QR Code image and stores
     * it in the QRImages folder.
     *
     * @param imageName the name to label the jpg image to
     *
     * @throws IOException the file path or image name given was invalid
     * @throws WriterException the image could not be created
     */
    public void createQR( String imageName ) throws IOException, WriterException {

        /** The file path the image should be created in */
        String path = "src/main/java/tech/geocodeapp/geocode/GeoCode/QRImages/"+ imageName + ".jpg";

        /** Create the QR Code and link it to the specified website */
        BitMatrix matrix = new MultiFormatWriter().encode( "https://www.example.com/", BarcodeFormat.QR_CODE, 400, 400 );

        /** Create the image and store it in the given path */
        MatrixToImageWriter.writeToPath( matrix, "jpg", Paths.get( path ) );
    }

}