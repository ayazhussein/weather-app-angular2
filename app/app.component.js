"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_1 = require('./weather');
var AppComponent = (function () {
    function AppComponent() {
        this.city = 'Bucharest';
        this.weather = new weather_1.Weather(1, "Bucharest", "cloudy", "Fully Cloudy");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>Weather App</h1>\n        <input [(ngModel)]=\"city\" placeholder=\"Search city\">\n        <h2>This is the weather forecast in {{ city }}</h2>\n        \n        <ul>\n            <li>Weather type : {{weather.main}}</li>\n            <li>Weather Description : {{weather.description}}</li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map