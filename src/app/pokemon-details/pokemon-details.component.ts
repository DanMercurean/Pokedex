import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonDetail } from '../models/pokemon.detail';
import { PokemonList } from '../models/pokemon.list';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  pokemon = {};
  classicMode: boolean;
  
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.pokemon = data.pokemon;
    // this.classicMode = data.classicMode;
    console.log(this.pokemon);
  }
  getAbilities(): string {
    return this.pokemon['abilities'].map(x => x.ability.name).join(', ');
  }
  getMoves(): string {
    return this.pokemon['moves'].map(x => x.move.name).join(', ');
  }
  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

}