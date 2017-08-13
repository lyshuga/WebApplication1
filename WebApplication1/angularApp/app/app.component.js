var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var Heroes = [
    { id: 11, name: 'FirstOne' }, { id: 12, name: 'Hallo' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.title = 'XD';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = Heroes;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        template: require('./template.html') /*,
        styles: [``]*/
    })
], AppComponent);
export { AppComponent };
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
export { Hero };
//# sourceMappingURL=app.component.js.map