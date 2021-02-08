import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PersonajesComponent } from './Components/personajes/personajes.component';
import { EpisodiosComponent } from './Components/episodios/episodios.component';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { InfoEscenariosComponent } from './Components/escenarios/info-escenarios/info-escenarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajesComponent,
    EpisodiosComponent,
    EscenariosComponent,
    TiendaComponent,
    InfoEscenariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
