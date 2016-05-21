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
var weather_service_1 = require('./weather.service');
var AppComponent = (function () {
    function AppComponent(weatherService) {
        this.weatherService = weatherService;
        this.unit = "metric";
        this.city = '';
        this.weatherOfCities = [];
    }
    AppComponent.prototype.addCity = function (city, unit, $event) {
        var _this = this;
        if ($event.keyCode == 13) {
            this.weatherService.getWeather(city, unit)
                .subscribe(function (weather) {
                if (weather) {
                    _this.weatherOfCities.push(weather);
                    _this.errorMessage = undefined;
                }
                else {
                    var cityWithoutWeather = city;
                    _this.errorMessage = "* There is no weather data for " + cityWithoutWeather;
                }
                _this.city = "";
            }, function (error) {
                _this.city = "";
                _this.errorMessage = error;
            });
        }
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <header>\n            <h1>Weather App</h1>\n        </header>\n        <div class=\"content\">\n            <input [(ngModel)]=\"city\" placeholder=\"Search city\" (keyup)=\"addCity(city,units, $event)\">\n            <p *ngIf=\"errorMessage\" class=\"error-message\">{{errorMessage}}</p>\n            <ul *ngFor=\"let weather of weatherOfCities\" class=\"weather-card\">\n                <li>\n                    <h2>{{ weather.city }} \u02DA </h2>\n                    <ul>\n                        <li>Weather type : {{weather.main}}</li>\n                        <li>Weather description : {{weather.description}}</li>\n                    </ul>    \n                </li>\n                \n            </ul>\n        </div>\n    ",
            styles: ["\n        header h1 {\n            padding: 10px;\n            text-align : center;\n            background: #5f9ea0;\n            color: #f5f5f5;\n            text-shadow: 1px 1px 4px #808080;\n        }\n        .content {\n            padding : 10px;\n        }\n        input {\n            font-size: 16px;\n            padding: 4px;\n        }\n        .weather-card {\n            border-bottom : 1px solid #030303;\n            padding-bottom: 10px;\n        }\n        .error-message {\n            font-size: 14px;\n            color: red;\n        }\n    \n    \n    "],
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map