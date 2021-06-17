package tech.geocodeapp.geocode.GeoCode.Service;

import io.swagger.model.CreateGeoCodeRequest;
import io.swagger.model.CreateGeoCodeResponse;
import io.swagger.model.GetGeoCodesResponse;
import org.springframework.stereotype.Service;
import tech.geocodeapp.geocode.GeoCode.Exceptions.InvalidRequestException;
import tech.geocodeapp.geocode.GeoCode.Exceptions.QRCodeException;

import tech.geocodeapp.geocode.GeoCode.Exceptions.RepoException;
import io.swagger.model.*;

/**
 * This is the main interface is for the GeoCode subsystem,
 * it is used to call the relevant use cases to create, manipulate and delete GeoCodes.
 */
public interface GeoCodeService {

    CreateGeoCodeResponse createGeoCode( CreateGeoCodeRequest request ) throws InvalidRequestException, QRCodeException, RepoException;

    GetGeoCodesResponse getAllGeoCodes( ) throws RepoException;

    GetCollectablesResponse getCollectables( GetCollectablesRequest request ) throws InvalidRequestException, RepoException;

    GetGeoCodesByDifficultyResponse getGeoCodesByDifficulty( GetGeoCodesByDifficultyRequest request ) throws InvalidRequestException, RepoException;

    GetHintsResponse getHints( GetHintsRequest request ) throws InvalidRequestException, RepoException;

    GetGeoCodeByQRCodeResponse getGeocodeByQRCode( GetGeoCodeByQRCodeRequest request ) throws InvalidRequestException, RepoException;

    GetGeoCodeByLocationResponse getGeoCodesByLocation( GetGeoCodeByLocationRequest request ) throws InvalidRequestException, RepoException;

    GetTrackablesResponse getTrackables( GetTrackablesRequest request ) throws InvalidRequestException, RepoException;

    SwapCollectablesResponse swapCollectables( SwapCollectablesRequest request ) throws InvalidRequestException, RepoException;

    UpdateAvailabilityResponse updateAvailability( UpdateAvailabilityRequest request ) throws RepoException, InvalidRequestException;
}
