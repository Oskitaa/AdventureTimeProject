import { Component, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {gsap, TimelineMax} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-espacio-grumoso',
  templateUrl: './espacio-grumoso.component.html',
  styleUrls: ['./espacio-grumoso.component.scss']
})
export class EspacioGrumosoComponent implements OnInit {
  images;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  constructor() {
    this.images = [
      "/assets/imgs/espacio_grumoso/gallery/image_1.jpg",
      "/assets/imgs/espacio_grumoso/gallery/image_2.jpg",
      "/assets/imgs/espacio_grumoso/gallery/image_3.jpg",
      "/assets/imgs/espacio_grumoso/gallery/image_4.png",
      "/assets/imgs/espacio_grumoso/gallery/image_5.png",
      "/assets/imgs/espacio_grumoso/gallery/image_6.png",
    ];
   }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    gsap.delayedCall(1, () => ScrollTrigger.refresh());
  }
  ngAfterViewInit(){
    // gsap.to("#sectionGeografia article",{
    //   scrollTrigger: {
    //     trigger: "#sectionGeografia article.row",
    //     toggleActions: "restart none restart none",
    //     markers: true,
    //   },
    //   opacity: 1
    // }).duration(1)
    //Animacion de la seccion intro del componente
    let introTimeLine = new TimelineMax({
      scrollTrigger: {
        trigger: "#intro article",
        toggleActions: "restart none restart none",
        start: "top center"
      }
    });
    introTimeLine.fromTo("#intro article h1",.5,{
      x: 100,
      y: -100,
      transform: "scale(0)",
    },{
      transform: "scale(1)"
    }).fromTo("#intro p",.5,{
      x: 200,
      y: 200,
      transform: "scale(0)",
    },{
      transform: "scale(1)"
    })
    let geografiaTimeLine_1 = new TimelineMax({
      scrollTrigger: {
        trigger: "#sectionGeografia article",
        toggleActions: "restart none restart pause",
        start: "top bottom",
        markers: true,
      }
    });
    //Animacion para el titulo primer paragro y imagenes de la seccion Geografia
    geografiaTimeLine_1.fromTo("#sectionGeografia article div h2",.75,{
      opacity: 0,
      x: -100
    },{
      opacity: 1,
      x: 0
    }).fromTo("#sectionGeografia article div.first p",1,{
      opacity: 0,
      x: -100
    },{
      opacity: 1,
      x: 0
    }).fromTo("#sectionGeografia article div div.images",1,{
      opacity: 0,
      y: 100
    },{
      opacity: 1,
      y: 0
    })
    let geografiaTimeLine_2 = new TimelineMax({
      scrollTrigger: {
        trigger: "#sectionGeografia article",
        toggleActions: "restart none restart none",
        start: "top center"
      }
    });
    geografiaTimeLine_2.fromTo("#sectionGeografia article div.second p",1.25,{
      transform: "scale(0)"
    },{
      transform: "scale(1)"
    })
  }

  ngAfterContentInit(){
  }
  ngOnDestroy(){
  }
}
