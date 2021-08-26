/**
 * Swagger GeoCode
 * This is the swagger documentation and API for the GeoCode project implemented by Peak Performers for the client [5DT](https://5dt.com/).
 *
 * OpenAPI spec version: 1.5.14
 * Contact: peakperformers@geocodeapp.tech
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CollectableSet } from './collectableSet';
import { MissionType } from './missionType';
import { Rarity } from './rarity';

export interface CollectableTypeComponent { 
    name: string;
    rarity: Rarity;
    id: string;
    image?: string;
    collectableSet: CollectableSet;
    expiryDate?: Date;
    area?: string;
    trackable?: boolean;
    missionType?: MissionType;
}