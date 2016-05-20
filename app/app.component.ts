import {Component} from '@angular/core';

import {Weather} from './weather';

@Component({
    selector: 'my-app',
    template: `
        <h1>Weather App</h1>
        <input [(ngModel)]="city" placeholder="Search city">
        <h2>This is the weather forecast in {{ city }}</h2>
        
        <ul>
            <li>Weather type : {{weather.main}}</li>
            <li>Weather Description : {{weather.description}}</li>
        </ul>
    `
})
export class AppComponent {

    city:string;
    weather:Weather;

    constructor() {
        this.city = 'Bucharest';

        this.weather = new Weather(1, "Bucharest", "cloudy", "Fully Cloudy");
    }

}