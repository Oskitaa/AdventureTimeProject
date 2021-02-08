import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EscenariosComponent } from './Components/escenarios/escenarios.component';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  {
    path: "escenarios",
    component: EscenariosComponent
  },
  {
    path: "",
    component: InicioComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
