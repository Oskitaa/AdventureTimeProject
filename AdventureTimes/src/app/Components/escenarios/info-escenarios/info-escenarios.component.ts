import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

import {windowResizeObservable} from 'src/assets/refreshAOS.js';

@Component({
  selector: 'app-info-escenarios',
  templateUrl: './info-escenarios.component.html',
  styleUrls: ['./info-escenarios.component.scss']
})
export class InfoEscenariosComponent implements OnInit {
  defaultWidth = 1920
  constructor() { }

  ngOnInit(): void {
    windowResizeObservable.subscribe((data) => {
      console.log(data);
      AOS.refreshHard()
    })
    AOS.init({
    });
  }
  ngOnDestroy(){
    windowResizeObservable.unsubscribe();
  }
}
