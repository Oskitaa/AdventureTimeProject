import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PersonajesComponent } from './Components/personajes/personajes.component';
import { EpisodiosComponent } from './Components/episodios/episodios.component';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailsComponent } from './Components/episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajesComponent,
    EpisodiosComponent,
    EscenariosComponent,
    TiendaComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
