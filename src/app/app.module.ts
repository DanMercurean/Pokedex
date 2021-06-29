import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    AboutComponent,
    PokemonDetailsComponent,
    ProgressBarComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatChipsModule,
    MatTabsModule,
    CommonModule,
    MatBottomSheetModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [PokemonDetailsComponent, ProgressBarComponent]
})
export class AppModule { }
