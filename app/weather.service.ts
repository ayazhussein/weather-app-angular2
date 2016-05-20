import {Injectable} from "@angular/core";
import {Http} from '@angular/http'
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Weather} from './weather'


const weatherApiURL:string = "http://api.openweathermap.org/data/2.5/weather?appid=fc1a0d35266dcf4c90a5041f6fde6a17"

@Injectable()
export class WeatherService {


    constructor(private http:Http) {


    }

    getWeather = function (city:string) {
        
        var weather:Weather;
        if (city.toLocaleLowerCase() == "vienna") {
            weather = {
                "id" : 1,
                "city" : "Vienna",
                "main" : "Clouds",
                "description" : "overcast clouds"
            };
        } else if (city.toLocaleLowerCase() == "london") {
            weather = {
                "id" : 2,
                "city" : "London",
                "main" : "Rain",
                "description" : "very heavy rain"
            };
        } 
        
        return weather;
    };
    

}