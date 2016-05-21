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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var weatherApiURL = "http://api.openweathermap.org/data/2.5/weather?appid=fc1a0d35266dcf4c90a5041f6fde6a17";
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeatherUrl = function (city, unit) {
        return weatherApiURL + "&q=" + city + "&units=" + unit;
    };
    WeatherService.prototype.getWeather = function (city, unit) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this.http.get(_this.getWeatherUrl(city, unit))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                if (res.code == "404") {
                    observable.error(res.message);
                }
                else {
                    var weather = res.weather[0];
                    weather.city = city;
                    observable.next(weather);
                }
            });
        });
    };
    ;
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map