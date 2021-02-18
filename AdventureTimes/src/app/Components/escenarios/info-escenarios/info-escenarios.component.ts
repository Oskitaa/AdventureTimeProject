import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-info-escenarios',
  templateUrl: './info-escenarios.component.html',
  styleUrls: ['./info-escenarios.component.scss']
})
export class InfoEscenariosComponent implements OnInit {
  
  constructor() { }

  refreshAOS(event){
    console.log(event);
    AOS.refresh();
  }
  ngOnInit(): void {
    AOS.init();
  }

}
