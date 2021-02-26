import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {gsap, TimelineMax} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-reino-hielo',
  templateUrl: './reino-hielo.component.html',
  styleUrls: ['./reino-hielo.component.scss']
})
export class ReinoHieloComponent implements OnInit {
  galleryImages: string[]
  constructor(private route: Router) { 
    this.galleryImages = [
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_1.jpg",
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_2.png",
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_3.png",
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_4.png",
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_5.jpg",
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_6.jpg",
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_8.jpg",
      "/assets/imgs/reino_hielo/gallery/reino_helado_gallery_9.png",
    ]
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    gsap.delayedCall(1, () => ScrollTrigger.refresh());
    gsap.fromTo("img.volver_atras",{
      transform: "scale(0)"
    },{
      transform: "scale(1)"
    }).duration(1)
    this.introAnimation();
    this.sectionUbicacionAnimation();
    this.sectionCuriosidadesAnimation();
    this.sectionGaleriaAnimation();
  }
  sectionGaleriaAnimation(){
    let galleryTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionGaleria article"))
    galleryTimeLine.fromTo("#sectionGaleria article h1",1,{
      y: -100,
    },{
      x: 0
    }).fromTo("#sectionGaleria article #carousel",.5,{
      transform: "scale(0)"
    },{
      transform: "scale(1)"
    })
  }
  goToEscenarios(){
    this.route.navigate(["/escenarios"]);
  }
  sectionCuriosidadesAnimation(){
    let curiosidadesTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionCuriosidades article"));
    let curiosidadesTimeLine_1 = new TimelineMax(this.getScrollTriggerConfig("#sectionCuriosidades article"));
    curiosidadesTimeLine.fromTo("#sectionCuriosidades article h2",.5,{
      y: -100,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
    }).fromTo("#sectionCuriosidades article ul li:nth-child(even)",1,{
      transform: "scaleX(0)",
      opacity: 0,
    },{
      transform: "scaleX(1)",
      opacity: 1,
    });
    curiosidadesTimeLine_1.fromTo("#sectionCuriosidades article ul li:nth-child(odd)",1,{
      y: 100,
      opacity: 0,
    },{
      y:  0,
      opacity: 1,
    }).delay(.5);
  }
  sectionUbicacionAnimation(){
    let ubicacionTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionUbicacion article"));
    let ubicacionTimeLine_1 = new TimelineMax(this.getScrollTriggerConfig("#sectionUbicacion article"));
    ubicacionTimeLine.fromTo("#sectionUbicacion article div:nth-child(odd) h2",.5,{
      y: -100,
      opacity: 0
    },{
      opacity: 1,
      y: 0
    }).fromTo("#sectionUbicacion article div:nth-child(odd) p",.5,{
      transform: "scale(0)"
    },{
      transform: "scale(1)"
    }).fromTo("#sectionUbicacion article div:nth-child(odd) img:nth-child(1)",.5,{
      y: 100,
      opacity: 0
    },{
      y: 0,
      opacity: 1
    }).fromTo("#sectionUbicacion article div:nth-child(odd) img:nth-child(2)",.5,{
      y: -100,
      opacity: 0
    },{
      y: 0,
      opacity: 1
    });
    ubicacionTimeLine_1.fromTo("#sectionUbicacion article div:nth-child(even) h2",.5,{
      transform: "scaleY(0)",
    },{
      transform: "scaleY(1)",
    }).fromTo("#sectionUbicacion article div:nth-child(even) img",.5,{
      transform: "scaleX(0)"
    },{
      transform: "scaleX(1)"
    }).fromTo("#sectionUbicacion article div:nth-child(even) p",.5,{
      y: 200,
      opacity: 0,
    },{
      y: 0,
      opacity: 1
    })
  }
  introAnimation(){
    let introTimeLine = new TimelineMax(this.getScrollTriggerConfig("#intro article"))
    introTimeLine.fromTo("#intro article h1",1,{
      transform: "scale(0)"
    },{
      transform: "scale(1)"
    }).fromTo("#intro article p:nth-child(even)",.5,{
      y: -200,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
    }).fromTo("#intro article p:nth-child(odd)",.5,{
      y: 100,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
    })
  }
  getScrollTriggerConfig(trigger){
    return {
      scrollTrigger: {
        trigger: trigger,
        toggleActions: "restart none restart none",
        start: "top center"
      }
    }
  }
}
