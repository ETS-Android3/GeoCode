/**
 * Swagger GeoCode
 * This is the swagger documentation and API for the GeoCode project implemented by Peak Performers for the client [5DT](https://5dt.com/).
 *
 * OpenAPI spec version: 1.5.19
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

import { CreateLeaderboardRequest } from '../model/createLeaderboardRequest';
import { CreateLeaderboardResponse } from '../model/createLeaderboardResponse';
import { CreatePointRequest } from '../model/createPointRequest';
import { DeletePointRequest } from '../model/deletePointRequest';
import { DeletePointResponse } from '../model/deletePointResponse';
import { GetEventLeaderboardRequest } from '../model/getEventLeaderboardRequest';
import { GetEventLeaderboardResponse } from '../model/getEventLeaderboardResponse';
import { GetLeaderboardByIDRequest } from '../model/getLeaderboardByIDRequest';
import { GetLeaderboardByIDResponse } from '../model/getLeaderboardByIDResponse';
import { GetPointForUserRequest } from '../model/getPointForUserRequest';
import { PointResponse } from '../model/pointResponse';
import { UpdatePointRequest } from '../model/updatePointRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LeaderboardService {

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
     * Create a new Leaderboard
     * Creates a new Leaderboard with the provided name
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createLeaderboard(body: CreateLeaderboardRequest, observe?: 'body', reportProgress?: boolean): Observable<CreateLeaderboardResponse>;
    public createLeaderboard(body: CreateLeaderboardRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CreateLeaderboardResponse>>;
    public createLeaderboard(body: CreateLeaderboardRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CreateLeaderboardResponse>>;
    public createLeaderboard(body: CreateLeaderboardRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createLeaderboard.');
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

        return this.httpClient.request<CreateLeaderboardResponse>('post',`${this.basePath}/Leaderboard/createLeaderboard`,
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
     * Create a new point object
     * Creates a new point object for a provided user and leaderboard
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createPoint(body: CreatePointRequest, observe?: 'body', reportProgress?: boolean): Observable<PointResponse>;
    public createPoint(body: CreatePointRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PointResponse>>;
    public createPoint(body: CreatePointRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PointResponse>>;
    public createPoint(body: CreatePointRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createPoint.');
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

        return this.httpClient.request<PointResponse>('post',`${this.basePath}/Leaderboard/createPoint`,
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
     * Delete a point
     * Deletes a point based on a provided id
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePoint(body: DeletePointRequest, observe?: 'body', reportProgress?: boolean): Observable<DeletePointResponse>;
    public deletePoint(body: DeletePointRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeletePointResponse>>;
    public deletePoint(body: DeletePointRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeletePointResponse>>;
    public deletePoint(body: DeletePointRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling deletePoint.');
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

        return this.httpClient.request<DeletePointResponse>('post',`${this.basePath}/Leaderboard/deletePoint`,
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
     * Get an Event&#x27;s Leaderboard details
     * Returns the Event&#x27;s Leaderboard details from a specific rank down for a specified number of users
     * @param body Request to get a subset of the Event&#x27;s Leaderboard details
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEventLeaderboard(body: GetEventLeaderboardRequest, observe?: 'body', reportProgress?: boolean): Observable<GetEventLeaderboardResponse>;
    public getEventLeaderboard(body: GetEventLeaderboardRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetEventLeaderboardResponse>>;
    public getEventLeaderboard(body: GetEventLeaderboardRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetEventLeaderboardResponse>>;
    public getEventLeaderboard(body: GetEventLeaderboardRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getEventLeaderboard.');
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

        return this.httpClient.request<GetEventLeaderboardResponse>('post',`${this.basePath}/Leaderboard/getEventLeaderboard`,
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
     * Get a Leaderboard
     * Get a Leaderboard by its ID
     * @param body Request to get a Leaderboard
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLeaderboardByID(body: GetLeaderboardByIDRequest, observe?: 'body', reportProgress?: boolean): Observable<GetLeaderboardByIDResponse>;
    public getLeaderboardByID(body: GetLeaderboardByIDRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetLeaderboardByIDResponse>>;
    public getLeaderboardByID(body: GetLeaderboardByIDRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetLeaderboardByIDResponse>>;
    public getLeaderboardByID(body: GetLeaderboardByIDRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getLeaderboardByID.');
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

        return this.httpClient.request<GetLeaderboardByIDResponse>('post',`${this.basePath}/Leaderboard/getLeaderboardByID`,
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
     * Get the User&#x27;s points for a certain Leaderboard
     * Get the User&#x27;s points for a certain Leaderboard
     * @param body Request to get a subset of the Event&#x27;s Leaderboard details
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPointForUser(body: GetPointForUserRequest, observe?: 'body', reportProgress?: boolean): Observable<PointResponse>;
    public getPointForUser(body: GetPointForUserRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PointResponse>>;
    public getPointForUser(body: GetPointForUserRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PointResponse>>;
    public getPointForUser(body: GetPointForUserRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getPointForUser.');
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

        return this.httpClient.request<PointResponse>('post',`${this.basePath}/Leaderboard/getPointForUser`,
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
     * Updates a point
     * Updates the fields of a point with values provided for the given id
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePoint(body: UpdatePointRequest, observe?: 'body', reportProgress?: boolean): Observable<PointResponse>;
    public updatePoint(body: UpdatePointRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PointResponse>>;
    public updatePoint(body: UpdatePointRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PointResponse>>;
    public updatePoint(body: UpdatePointRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePoint.');
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

        return this.httpClient.request<PointResponse>('post',`${this.basePath}/Leaderboard/updatePoint`,
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
