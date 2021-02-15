import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodiosComponent } from './Components/episodios/episodios.component';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TiendaComponent } from './Components/tienda/tienda.component';

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
    path:"episodios",
    component:EpisodiosComponent
  },
  {
    path:"tienda",
    component:TiendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
