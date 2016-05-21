import {Injectable} from "@angular/core";
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Weather} from './weather'
import any = jasmine.any;


const weatherApiURL:string = "http://api.openweathermap.org/data/2.5/weather?appid=fc1a0d35266dcf4c90a5041f6fde6a17"

@Injectable()
export class WeatherService {


    constructor(private http:Http) {

    }

    getWeatherUrl(city:string, unit:string) {
        return weatherApiURL + "&q=" + city + "&units=" + unit ;
    }


    getWeather(city:string, unit:string) {
        return new Observable((observable:any) => {
            this.http.get(this.getWeatherUrl(city,unit))
                .map(res => res.json())
                .subscribe(res => {
                    if (res.code == "404") {
                        observable.error(res.message);
                    } else {
                        var weather:Weather = res.weather[0];
                        weather.city = city;
                        observable.next(weather);
                    }
                })


        });

    };
    

}