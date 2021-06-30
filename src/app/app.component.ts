import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  links = [
    { path: 'pokemon-list', label: 'POKEMON' },
    { path: 'about', label: 'ABOUT' }
  ]
  
}
