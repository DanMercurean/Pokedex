import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  pokemon = {};
  classicMode: boolean;

  constructor(public dialogRef: MatDialogRef<PokemonDetailsComponent>
  
  ) {

  }
  getAbilities(): string {
    return this.pokemon['abilities']?.map(x => x.ability.name).join(', ');
  }
  getMoves(): string {
    return this.pokemon['moves']?.map(x => x.move.name).join(', ');
  }
  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

}