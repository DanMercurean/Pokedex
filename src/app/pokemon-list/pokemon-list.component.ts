import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { DataService } from '../services/data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  debounce = new Subject<any>();
  @Output() typing = new EventEmitter<string>();
  @Input() value: string;
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;
  breakpoint: number;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    this.debounce.pipe(debounceTime(100)).subscribe((filter: any) => {
      this.typing.emit(filter.value);
    });
  }


  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  // Get Pokemons
  getPokemons() {
    this.dataService.getPokemons(12, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach(result => {
          this.dataService.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);

            });
        });
      });
  }

  openPokemonDetails(i) {
    const myPokemon = this.pokemons[i];
    this.dialog.open(PokemonDetailsComponent).componentInstance.pokemon = myPokemon;
  }
}
