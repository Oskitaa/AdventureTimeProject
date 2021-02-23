import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PajaxService } from 'src/app/Servicio/pajax.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  private idSeason : number;
  public episodes;
  public urlimg = environment.urlImg;

  constructor(private peti : PajaxService, private param : ActivatedRoute) { 
    this.idSeason = this.param.snapshot.params.id;
    this.episodes = {};
  }

  ngOnInit(): void {
    this.peti.getEpidodesSeasons(this.idSeason).subscribe(d => {
      console.log(d);
      this.episodes = d;
    }
    
    )
    
  }

}
