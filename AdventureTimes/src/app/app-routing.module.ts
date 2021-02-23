import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeDetailsComponent } from './Components/episode-details/episode-details.component';
import { EpisodiosComponent } from './Components/episodios/episodios.component';

const routes: Routes = [
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
