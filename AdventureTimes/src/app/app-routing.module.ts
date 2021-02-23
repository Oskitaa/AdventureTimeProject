import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodiosComponent } from './Components/episodios/episodios.component';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { EpisodeDetailsComponent } from './Components/episode-details/episode-details.component';

const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"escenarios",
    component:EscenariosComponent
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
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
