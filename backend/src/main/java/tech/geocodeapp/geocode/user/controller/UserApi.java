package tech.geocodeapp.geocode.user.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import tech.geocodeapp.geocode.user.request.*;
import tech.geocodeapp.geocode.user.response.*;

import javax.validation.Valid;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2021-06-09T21:02:56.988Z[GMT]")
@Validated
@CrossOrigin(origins = "${web_referrer}", maxAge = 3600)
public interface UserApi {

    @Operation(summary = "Gets the user's trackable", description = "Get the given user's trackable", security = {
            @SecurityRequirement(name = "bearerAuth")    }, tags={ "User" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The user's trackable was successfully returned", content = @Content(mediaType = "application/json", schema = @Schema(implementation = GetUserTrackableResponse.class))),

            @ApiResponse(responseCode = "401", description = "Invalid JWT token") })
    @RequestMapping(value = "/User/getUserTrackable",
            produces = { "application/json", "application/xml" },
            consumes = { "application/json", "application/xml" },
            method = RequestMethod.POST)
    ResponseEntity<GetUserTrackableResponse> getUserTrackable(@Parameter(in = ParameterIn.DEFAULT, description = "Request to get the user's trackable", required=true, schema=@Schema()) @RequestBody GetUserTrackableRequest body);

    @Operation(summary = "Update the location of the user's trackable", description = "Update the location of the user's trackable when they place it", security = {
            @SecurityRequirement(name = "bearerAuth")    }, tags={ "User" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The user's trackable had it's location successfully updated", content = @Content(mediaType = "application/json", schema = @Schema(implementation = UpdateLocationResponse.class))),

            @ApiResponse(responseCode = "401", description = "Invalid JWT token") })
    @RequestMapping(value = "/User/updateLocation",
            produces = { "application/json", "application/xml" },
            consumes = { "application/json", "application/xml" },
            method = RequestMethod.POST)
    ResponseEntity<UpdateLocationResponse> updateLocation(@Parameter(in = ParameterIn.DEFAULT, description = "Request to update the location of the user's trackable", required=true, schema=@Schema()) @Valid @RequestBody UpdateLocationRequest body);

    @Operation(summary = "Gets the Collectable Types that the user has ever found", description = "Get a user's found Collectable Types", security = {
            @SecurityRequirement(name = "bearerAuth")    }, tags={ "User" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully returned the user's found collectables", content = @Content(mediaType = "application/json", schema = @Schema(implementation = GetFoundCollectableTypesResponse.class))),

            @ApiResponse(responseCode = "401", description = "Invalid JWT token") })
    @RequestMapping(value = "/User/getFoundCollectableTypes",
            produces = { "application/json", "application/xml" },
            consumes = { "application/json", "application/xml" },
            method = RequestMethod.POST)
    ResponseEntity<GetFoundCollectableTypesResponse> getFoundCollectableTypes(@Parameter(in = ParameterIn.DEFAULT, description = "Request to get the IDs of the user's found Collectable Types", required=true, schema=@Schema()) @Valid @RequestBody GetFoundCollectableTypesRequest body);


    @Operation(summary = "Gets the GeoCodes that the user has ever found", description = "Gets the user's found GeoCodes", security = {
            @SecurityRequirement(name = "bearerAuth")    }, tags={ "User" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully returned all owned GeoCodes for the user", content = @Content(mediaType = "application/json", schema = @Schema(implementation = GetFoundGeoCodesResponse.class))),

            @ApiResponse(responseCode = "401", description = "Invalid JWT token") })
    @RequestMapping(value = "/User/getFoundGeoCodes",
            produces = { "application/json", "application/xml" },
            consumes = { "application/json", "application/xml" },
            method = RequestMethod.POST)
    ResponseEntity<GetFoundGeoCodesResponse> getFoundGeoCodes(@Parameter(in = ParameterIn.DEFAULT, description = "Request to get the user's found GeoCodes", required=true, schema=@Schema()) @Valid @RequestBody GetFoundGeoCodesRequest body);


    @Operation(summary = "Gets the user's owned GeoCodes", description = "Get's the user's owned GeoCodes", security = {
            @SecurityRequirement(name = "bearerAuth")    }, tags={ "User" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully returned all owned GeoCodes for the user", content = @Content(mediaType = "application/json", schema = @Schema(implementation = GetOwnedGeoCodesResponse.class))),

            @ApiResponse(responseCode = "401", description = "Invalid JWT token") })
    @RequestMapping(value = "/User/getOwnedGeoCodes",
            produces = { "application/json", "application/xml" },
            consumes = { "application/json", "application/xml" },
            method = RequestMethod.POST)
    ResponseEntity<GetOwnedGeoCodesResponse> getOwnedGeoCodes(@Parameter(in = ParameterIn.DEFAULT, description = "Request to get the user's owned GeoCodes", required=true, schema=@Schema()) @Valid @RequestBody GetOwnedGeoCodesRequest body);

    @Operation(summary = "Get all of the users in the system", description = "Get all of the users", security = {
        @SecurityRequirement(name = "bearerAuth")    }, tags={ "User" })
    @ApiResponses(value = { 
        @ApiResponse(responseCode = "200", description = "Successfully returned all of the users", content = @Content(mediaType = "application/json", schema = @Schema(implementation = GetUsersResponse.class))),
        
        @ApiResponse(responseCode = "401", description = "Invalid JWT token") })
    @RequestMapping(value = "/User/getUsers",
        produces = { "application/json", "application/xml" }, 
        consumes = { "application/json", "application/xml" }, 
        method = RequestMethod.POST)
    ResponseEntity<GetUsersResponse> getUsers(@Parameter(in = ParameterIn.DEFAULT, description = "Request to get all users in the system", required = true, schema = @Schema()) @Valid @RequestBody GetUsersRequest body);

    @Operation(summary = "Gets the User's Leaderboard rankings", description = "Gets all the points and ranking for the Leaderboards that the given User is on", security = {
            @SecurityRequirement(name = "bearerAuth")    }, tags={ "User" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "getMyLeaderboards Response", content = @Content(mediaType = "application/json", schema = @Schema(implementation = GetMyLeaderboardsResponse.class))),

            @ApiResponse(responseCode = "401", description = "Invalid JWT token") })
    @RequestMapping(value = "/User/getMyLeaderboards",
            produces = { "application/json", "application/xml" },
            consumes = { "application/json", "application/xml" },
            method = RequestMethod.POST)
    ResponseEntity<GetMyLeaderboardsResponse> getMyLeaderboards(@Parameter(in = ParameterIn.DEFAULT, description = "Request to get the name, points and ranking for all of the Leaderboards that a User is on", required=true, schema=@Schema()) @Valid @RequestBody GetMyLeaderboardsRequest body);


}

