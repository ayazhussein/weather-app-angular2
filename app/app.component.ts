import {Component} from '@angular/core';

import {Weather} from './weather';
import {WeatherService} from './weather.service';
@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Weather App</h1>
        </header>
        <div class="content">
            <input [(ngModel)]="city" placeholder="Search city" (keyup)="addCity(city, $event)">
            <p *ngIf="errorMessage" class="error-message">{{errorMessage}}</p>
            <ul *ngFor="let weather of weatherOfCities" class="weather-card">
                <li>
                    <h2>{{ weather.city }} : </h2>
                    <ul>
                        <li>Weather type : {{weather.main}}</li>
                        <li>Weather description : {{weather.description}}</li>
                    </ul>    
                </li>
                
            </ul>
        </div>
    `,
    styles: [`
        header h1 {
            padding: 10px;
            text-align : center;
            background: #5f9ea0;
            color: #f5f5f5;
            text-shadow: 1px 1px 4px #808080;
        }
        .content {
            padding : 10px;
        }
        input {
            font-size: 16px;
            padding: 4px;
        }
        .weather-card {
            border-bottom : 1px solid #030303;
            padding-bottom: 10px;
        }
        .error-message {
            font-size: 14px;
            color: red;
        }
    
    
    `],
    providers: [WeatherService]
})
export class AppComponent {

    public city:string;
    public cities:Array<string>;
    public weatherOfCities:Array<Weather>;
    public errorMessage:string;

    constructor(private weatherService:WeatherService) {
        this.city = '';
        this.weatherOfCities = [];
    }


    addCity(city:string, $event:any) {
        if ($event.keyCode == 13) {
            var weather = this.weatherService.getWeather(city);
            if (weather) {
                this.weatherOfCities.unshift(weather);
            }
            this.city = "";
        }
    };
}