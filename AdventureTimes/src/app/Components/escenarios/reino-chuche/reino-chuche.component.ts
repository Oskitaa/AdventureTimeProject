import { absoluteFromSourceFile } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {gsap, TimelineMax} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-reino-chuche',
  templateUrl: './reino-chuche.component.html',
  styleUrls: ['./reino-chuche.component.scss']
})
export class ReinoChucheComponent implements OnInit {
  lugares: Object;
  lugarSelected: number = 0;
  galleryImages: string[];
  changeCardTimeLine = new TimelineMax();
  constructor(private route: Router) {
    this.galleryImages = [
      "/assets/imgs/reino_chuche/gallery/reino_chuche_gallery_1.png",
      "/assets/imgs/reino_chuche/gallery/reino_chuche_gallery_2.png",
      "/assets/imgs/reino_chuche/gallery/reino_chuche_gallery_3.png",
      "/assets/imgs/reino_chuche/gallery/reino_chuche_gallery_4.jpg",
      "/assets/imgs/reino_chuche/gallery/reino_chuche_gallery_5.jpg",
      "/assets/imgs/reino_chuche/gallery/reino_chuche_gallery_6.jpg",
      "/assets/imgs/reino_chuche/gallery/reino_chuche_gallery_7.jpg",
    ]
    this.lugares = [
      {
        id: 1,
        title: "Castillo de la Reina Chuche",
        descripcion: "El Castillo de la Dulce Princesa (También conocido como Castillo de Chuchelandia) es el castillo donde vive la Dulce Princesa y la dulce gente, y es la principal construcción del Dulce Reino. Puede tener cierto parecido con Minas Tirith del Señor de los Anillos, ya que se divide en partes (la de abajo mas grande que la de arriba) y tiene una gran torre.",
        image: "/assets/imgs/reino_chuche/reino_chuche_lugares_1.jpg"
      },
      {
        id: 2,
        title: "Ducado de la nuez",
        descripcion: "El Ducado de la Nuez es una región de la Tierra de Ooo en Hora de Aventura. Es el hogar habitado por el Duque de la Nuez, su familia y las demás personas nuez. Todo allí, incluyendo las aves y los árboles, está hecho de nuez. Se trata de un ducado, no de un reino, ya que lo rigen el duque y la duquesa de Nuez y no reyes. Es una pequeña provincia del Dulce Reino.",
        image: "/assets/imgs/reino_chuche/reino_chuche_lugares_2.png"
      },
      {
        id: 3,
        title: "Coolest Hotel",
        descripcion: "El Coolest Hotel es un hotel que está en el Dulce Reino, apareció por primera vez en el episodio El Caso de la Princesa Grumosa. El hotel tiene tres plantas. En el episodio El Caso de la Princesa Grumosa, La Princesa Grumosa se había quedado en la habitación 303. Las llaves de las habitaciones del hotel cuentan con el número de habitación del hotel en un lado y una imagen del edificio con las palabras The Coolest Hotel. La dirección del hotel es 818.",
        image: "/assets/imgs/reino_chuche/reino_chuche_lugares_3.jpg"
      }
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
  this.introSectionAnimation();
  this.sectionUbicacionAnimation();
  this.sectionLugaresAnimation();
  this.sectionGalleryAnimation();
}
goToEscenarios(){
  this.route.navigate(["/escenarios"]);
}
sectionGalleryAnimation(){
  let galleryTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionGaleria article"))
  galleryTimeLine.fromTo("#sectionGaleria article h1",1,{
    opacity: 0,
    y: -100,
  },{
    opacity: 1,
    y: 0
  }).fromTo("#sectionGaleria article #carousel",.5,{
    transform: "scale(0)"
  },{
    transform: "scale(1)"
  })
}
sectionLugaresAnimation(){
  let lugaresTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionLugares article"))
  lugaresTimeLine.fromTo("#sectionLugares article .lugares h2",.5,{
    transform: "scaleY(0)"
  },{
    transform: "scaleY(1)"
  }).fromTo("#sectionLugares article .lugares ul li:nth-child(odd)",.5,{
    transform: "scaleX(0)"
  },{
    transform: "scaleX(1)"
  }).fromTo("#sectionLugares article .lugares ul li:nth-child(even)",.5,{
    transform: "scaleY(0)"
  },{
    transform: "scaleY(1)"
  })
}
sectionUbicacionAnimation(){
  let ubicacionTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionUbicacion article"))
  let ubicacionTimeLine_1 = new TimelineMax(this.getScrollTriggerConfig("#sectionUbicacion article"))
  ubicacionTimeLine.fromTo("#sectionUbicacion article h2",1,{
    y: -100,
    opacity: 0,
  },{
    y: 0,
    opacity: 1
  }).fromTo("#sectionUbicacion article p",1,{
    transform: "scaleX(0)"
  },{
    transform: "scaleX(1)"
  })
  ubicacionTimeLine_1.fromTo("#sectionUbicacion article div img:nth-child(1)",1,{
    y: -100,
    opacity: 0,
  },{
    y: 0,
    opacity: 1,
  }).fromTo("#sectionUbicacion article div img:nth-child(2)",1,{
    y: 100,
    opacity: 0,
  },{
    y: 0,
    opacity: 1,
  })
}
introSectionAnimation(){
  let introTimeLine = new TimelineMax({
    scrollTrigger: {
      trigger: "#intro article",
      toggleActions: "restart none restart none",
      start: "top center"
    }
  });
  introTimeLine.fromTo("#intro article h1",1,{
    x: -100,
    y: -100,
    transform: "scaleX(0)"
  },{
    x: 0,
    y: 0,
    transform: "scaleX(1)"

  })
  gsap.fromTo("#intro article p:nth-child(even)",1,{
    scrollTrigger: {
      trigger: "#intro article",
      toggleActions: "restart none restart none",
      start: "top center"
    },
    x: -100,
    y: 100,
    transform: "scaleX(0)"
  },{
    scrollTrigger: {
      trigger: "#intro article",
      toggleActions: "restart none restart none",
      start: "top center"
    },
    x: 0,
    y: 0,
    transform: "scaleX(1)"
  })
  gsap.fromTo("#intro article p:nth-child(odd)",1,{
    scrollTrigger: {
      trigger: "#intro article",
      toggleActions: "restart none restart none",
      start: "top center"
    },
    x: 100,
    y: -100,
    transform: "scaleY(0)"
  },{
    scrollTrigger: {
      trigger: "#intro article",
      toggleActions: "restart none restart none",
      start: "top center"
    },
    x: 0,
    y: 0,
    transform: "scaleY(1)"
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
changeCard(id){
  if(id != this.lugarSelected){
    if(window.innerWidth > 1100 && this.lugarSelected == 0){
      console.log("se ejecuta");
      this.changeCardTimeLine.fromTo(".lugares",.5,{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      },{
        left: 0,
        transform: "translateX(0)",
      })
    }
    if(window.innerWidth < 1100 && this.lugarSelected == 0){
      this.changeCardTimeLine.to("#sectionLugares",.5,{
        height: "140vh",
      }).fromTo("#sectionLugares .lugares",.5,{
        left: 0,
        transform: "translateY(0)",
      },{
      })
    }
    if(this.lugarSelected != 0){
      this.changeCardTimeLine.to("#sectionLugares article #card_"+this.lugarSelected,.5,{
        transform: "scale(0)",
        opacity: 0,
        display: "none",
      })
    }
    this.lugarSelected = id;
    this.changeCardTimeLine.fromTo("#sectionLugares article #card_"+id,1,{
      transform: "scale(1)",
      opacity: 1,
      x: 100,
    },{
      display: "block",
      x: 0,
    })
  }
}
}
