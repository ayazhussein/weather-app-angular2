

import {IWeather} from './Iweather';

export class Weather implements IWeather {


    constructor(public id:number, public city:string, public main:string, public description:string) {
        
    }

}