import { Component, OnInit } from '@angular/core';
import { PajaxService } from 'src/app/Servicio/pajax.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {

  /*public seasons;
  public urlimg = environment.urlImg;*/

  constructor() { }

  ngOnInit(): void {

    /*this.peti.getSeassons().subscribe(d => {
      
      console.log(d);
      this.seasons = d?.seasons;
    });*/

  }

}
