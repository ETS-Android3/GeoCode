/**
 * Swagger GeoCode
 * This is the swagger documentation and API for the GeoCode project implemented by Peak Performers for the client [5DT](https://5dt.com/).
 *
 * OpenAPI spec version: 1.6
 * Contact: peakperformers@geocodeapp.tech
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Difficulty } from './difficulty';
import { GeoPoint } from './geoPoint';

export interface UpdateGeoCodeRequest { 
    geoCodeID: string;
    description: string;
    location: GeoPoint;
    hints: Array<string>;
    difficulty: Difficulty;
    available: boolean;
}