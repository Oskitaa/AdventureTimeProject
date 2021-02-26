import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { EspacioGrumosoComponent } from './Components/escenarios/espacio-grumoso/espacio-grumoso.component';
import { ReinoChucheComponent } from './Components/escenarios/reino-chuche/reino-chuche.component';
import { ReinoFuegoComponent } from './Components/escenarios/reino-fuego/reino-fuego.component';
import { ReinoHieloComponent } from './Components/escenarios/reino-hielo/reino-hielo.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { EpisodeDetailsComponent } from './Components/episode-details/episode-details.component';
import { EpisodiosComponent } from './Components/episodios/episodios.component';

const routes: Routes = [
  {
    path: "escenarios",
    component: EscenariosComponent,
    data: {animation: "Escenarios"}
  },
  {
    path: "escenarios/espacio-grumoso",
    component: EspacioGrumosoComponent,
  },
  {
    path: "escenarios/reino-hielo",
    component: ReinoHieloComponent,
  },
  {
    path: "escenarios/reino-fuego",
    component: ReinoFuegoComponent,
  },
  {
    path: "escenarios/reino-chuche",
    component: ReinoChucheComponent,
  },
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"tienda",
    component:TiendaComponent
  },
  {
    path: "seasons",
    component: EpisodiosComponent
  },
  {
    path: "seasons/:id",
    component: EpisodeDetailsComponent
  },
  {
    path: "seasons/:idSeason/episode/:idEpisode",
    component: EpisodeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
