import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonDetail } from '../models/pokemon.detail';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: PokemonDetail;
  // classicMode: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.pokemon = data.pokemon;
    // this.classicMode = data.classicMode;
  }

  ngOnInit(): void {
  }
  getAbilities(): string {
    return this.pokemon.abilities.map(x => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }
}
