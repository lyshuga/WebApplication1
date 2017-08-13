import { Component } from '@angular/core';
const Heroes: Hero[] = [
    { id: 11, name: 'FirstOne' }, {id: 12, name:'Hallo'}];

@Component({
  selector: 'my-app',
  template: require('./template.html')/*,
  styles: [``]*/
})
export class AppComponent  {
    name = 'Angular';
    title = 'XD';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    heroes = Heroes;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
export class Hero {
    id: number;
    name: string;
}


