import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { EspacioGrumosoComponent } from './Components/escenarios/espacio-grumoso/espacio-grumoso.component';
import { ReinoChucheComponent } from './Components/escenarios/reino-chuche/reino-chuche.component';
import { ReinoFuegoComponent } from './Components/escenarios/reino-fuego/reino-fuego.component';
import { ReinoHieloComponent } from './Components/escenarios/reino-hielo/reino-hielo.component';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  {
    path: "escenarios",
    component: EscenariosComponent,
    data: {animation: "Escenarios"}
  },
  {
    path: "",
    component: InicioComponent
  },{
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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
