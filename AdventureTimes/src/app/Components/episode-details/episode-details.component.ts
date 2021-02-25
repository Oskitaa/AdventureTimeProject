import { Component, Input, OnInit } from '@angular/core';
import { PajaxService } from 'src/app/Servicio/pajax.service';
import { environment } from 'src/environments/environment';

import { gsap } from "gsap";
import { ScrollTrigger,TimelineMax } from "gsap/all";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent{

  @Input() idSeason : number;
  public episodes;
  public urlimg = environment.urlImg;
  public ancho = window.innerWidth;

  constructor(private peti : PajaxService) { 
    this.episodes = {};
  }

  ngOnChanges() : void{
    this.peti.getEpidodesSeasons(this.idSeason).subscribe(d => {
      this.episodes = d;
    })
  }

  ngOnInit() : void {
    let time = new TimelineMax();
    setTimeout(() => {
      var sections : any = gsap.utils.toArray('.episode');

      sections.forEach((section) =>{
        time.to(<any>section,{
          transform:"scale(1)"
        }).duration(2)
      })  
    }, 100);

  }
}