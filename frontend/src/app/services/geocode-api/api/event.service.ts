/**
 * Swagger GeoCode
 * This is the swagger documentation and API for the GeoCode project implemented by Peak Performers for the client [5DT](https://5dt.com/).
 *
 * OpenAPI spec version: 1.5.16
 * Contact: peakperformers@geocodeapp.tech
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ChangeAvailabilityRequest } from '../model/changeAvailabilityRequest';
import { ChangeAvailabilityResponse } from '../model/changeAvailabilityResponse';
import { CreateEventRequest } from '../model/createEventRequest';
import { CreateEventResponse } from '../model/createEventResponse';
import { CreateLeaderboardRequest } from '../model/createLeaderboardRequest';
import { CreateLeaderboardResponse } from '../model/createLeaderboardResponse';
import { EventsNearMeRequest } from '../model/eventsNearMeRequest';
import { EventsNearMeResponse } from '../model/eventsNearMeResponse';
import { GetAllEventsResponse } from '../model/getAllEventsResponse';
import { GetCurrentEventStatusRequest } from '../model/getCurrentEventStatusRequest';
import { GetCurrentEventStatusResponse } from '../model/getCurrentEventStatusResponse';
import { GetEnteredEventsRequest } from '../model/getEnteredEventsRequest';
import { GetEnteredEventsResponse } from '../model/getEnteredEventsResponse';
import { GetEventRequest } from '../model/getEventRequest';
import { GetEventResponse } from '../model/getEventResponse';
import { GetEventsByLocationRequest } from '../model/getEventsByLocationRequest';
import { GetEventsByLocationResponse } from '../model/getEventsByLocationResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EventService {

    protected basePath = 'https://geocodeapp.tech:8080/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Change the availability of an Event
     * Change the availability of an Event to the given availability
     * @param body Request to change the availability an Event
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changeAvailability(body: ChangeAvailabilityRequest, observe?: 'body', reportProgress?: boolean): Observable<ChangeAvailabilityResponse>;
    public changeAvailability(body: ChangeAvailabilityRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ChangeAvailabilityResponse>>;
    public changeAvailability(body: ChangeAvailabilityRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ChangeAvailabilityResponse>>;
    public changeAvailability(body: ChangeAvailabilityRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling changeAvailability.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ChangeAvailabilityResponse>('post',`${this.basePath}/Event/changeAvailability`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a new Event
     * Create a new Event in the system with the specified attributes
     * @param body Request to create an Event
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createEvent(body: CreateEventRequest, observe?: 'body', reportProgress?: boolean): Observable<CreateEventResponse>;
    public createEvent(body: CreateEventRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CreateEventResponse>>;
    public createEvent(body: CreateEventRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CreateEventResponse>>;
    public createEvent(body: CreateEventRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createEvent.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CreateEventResponse>('post',`${this.basePath}/Event/createEvent`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a new Leaderboard for an Event
     * Create a new Leaderboard for an Event
     * @param body Request to create a new Leaderboard for an Event
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createLeaderBoard(body: CreateLeaderboardRequest, observe?: 'body', reportProgress?: boolean): Observable<CreateLeaderboardResponse>;
    public createLeaderBoard(body: CreateLeaderboardRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CreateLeaderboardResponse>>;
    public createLeaderBoard(body: CreateLeaderboardRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CreateLeaderboardResponse>>;
    public createLeaderBoard(body: CreateLeaderboardRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createLeaderBoard.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CreateLeaderboardResponse>('post',`${this.basePath}/Event/createLeaderBoard`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns all the Events
     * Returns all the Events in the system
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllEvents(observe?: 'body', reportProgress?: boolean): Observable<GetAllEventsResponse>;
    public getAllEvents(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllEventsResponse>>;
    public getAllEvents(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllEventsResponse>>;
    public getAllEvents(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GetAllEventsResponse>('get',`${this.basePath}/Event/getAllEvents`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the Event status for a User
     * Get the Event status for a User
     * @param body Request get the Event status for a User
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrentEventStatus(body: GetCurrentEventStatusRequest, observe?: 'body', reportProgress?: boolean): Observable<GetCurrentEventStatusResponse>;
    public getCurrentEventStatus(body: GetCurrentEventStatusRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCurrentEventStatusResponse>>;
    public getCurrentEventStatus(body: GetCurrentEventStatusRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCurrentEventStatusResponse>>;
    public getCurrentEventStatus(body: GetCurrentEventStatusRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getCurrentEventStatus.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<GetCurrentEventStatusResponse>('post',`${this.basePath}/Event/getCurrentEventStatus`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all entered Events and their statuses for a User
     * Get all entered Events and their statuses for a User
     * @param body Request get the Events for a User
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEnteredEvents(body: GetEnteredEventsRequest, observe?: 'body', reportProgress?: boolean): Observable<GetEnteredEventsResponse>;
    public getEnteredEvents(body: GetEnteredEventsRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetEnteredEventsResponse>>;
    public getEnteredEvents(body: GetEnteredEventsRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetEnteredEventsResponse>>;
    public getEnteredEvents(body: GetEnteredEventsRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getEnteredEvents.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<GetEnteredEventsResponse>('post',`${this.basePath}/Event/getEnteredEvents`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a specific stored Event
     * Get a stored Event in the system with the specified id
     * @param body Request to get an Event
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEvent(body: GetEventRequest, observe?: 'body', reportProgress?: boolean): Observable<GetEventResponse>;
    public getEvent(body: GetEventRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetEventResponse>>;
    public getEvent(body: GetEventRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetEventResponse>>;
    public getEvent(body: GetEventRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getEvent.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<GetEventResponse>('post',`${this.basePath}/Event/getEvent`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get an Event by its location
     * Get an Event by its location from the given co-ordinates
     * @param body Request to get an Event by its location
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEventsByLocation(body: GetEventsByLocationRequest, observe?: 'body', reportProgress?: boolean): Observable<GetEventsByLocationResponse>;
    public getEventsByLocation(body: GetEventsByLocationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetEventsByLocationResponse>>;
    public getEventsByLocation(body: GetEventsByLocationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetEventsByLocationResponse>>;
    public getEventsByLocation(body: GetEventsByLocationRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getEventsByLocation.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<GetEventsByLocationResponse>('post',`${this.basePath}/Event/getEventsByLocation`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves all the Events within a specified radius
     * Retrieves all the Events within a specified radius of a User
     * @param body Request to all the Events near a specified location
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEventsNearMe(body: EventsNearMeRequest, observe?: 'body', reportProgress?: boolean): Observable<EventsNearMeResponse>;
    public getEventsNearMe(body: EventsNearMeRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EventsNearMeResponse>>;
    public getEventsNearMe(body: EventsNearMeRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EventsNearMeResponse>>;
    public getEventsNearMe(body: EventsNearMeRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getEventsNearMe.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<EventsNearMeResponse>('post',`${this.basePath}/Event/getEventsNearMe`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
