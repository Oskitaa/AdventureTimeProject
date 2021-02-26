import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PersonajesComponent } from './Components/personajes/personajes.component';
import { EpisodiosComponent } from './Components/episodios/episodios.component';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { TarjetaTiendaComponent } from './Components/tienda/tarjeta-tienda/tarjeta-tienda.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EspacioGrumosoComponent } from './Components/escenarios/espacio-grumoso/espacio-grumoso.component';
import { ReinoHieloComponent } from './Components/escenarios/reino-hielo/reino-hielo.component';
import { ReinoFuegoComponent } from './Components/escenarios/reino-fuego/reino-fuego.component';
import { ReinoChucheComponent } from './Components/escenarios/reino-chuche/reino-chuche.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailsComponent } from './Components/episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajesComponent,
    EpisodiosComponent,
    EpisodeDetailsComponent,
    EscenariosComponent,
    TiendaComponent,
    TarjetaTiendaComponent,
    NavbarComponent,
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    EspacioGrumosoComponent,
    ReinoHieloComponent,
    ReinoFuegoComponent,
    ReinoChucheComponent,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
