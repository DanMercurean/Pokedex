import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonListComponent } from './pokemon-list.component';
import { Pipe } from '@angular/core';



@NgModule({
  declarations: [
    PokemonListComponent,
  ],
  imports: [
    NgxPaginationModule,
    Pipe,
    CommonModule,
    MatDialogModule,
    HttpClient,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ]
})
export class PokemonListModule { }
