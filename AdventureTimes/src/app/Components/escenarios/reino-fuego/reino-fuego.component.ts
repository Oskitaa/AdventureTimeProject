import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {gsap, TimelineMax} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-reino-fuego',
  templateUrl: './reino-fuego.component.html',
  styleUrls: ['./reino-fuego.component.scss']
})
export class ReinoFuegoComponent implements OnInit {
  habitantes: Object;
  habitanteSelected: number = 0;
  galleryImages: string[];
  changeCardTimeLine = new TimelineMax();
  constructor(private route: Router) {
    this.galleryImages = [
      "/assets/imgs/reino_fuego/gallery/reino_fuego_gallery_1.jpg",
      "/assets/imgs/reino_fuego/gallery/reino_fuego_gallery_2.png",
      "/assets/imgs/reino_fuego/gallery/reino_fuego_gallery_3.png",
      "/assets/imgs/reino_fuego/gallery/reino_fuego_gallery_4.jpg",
      "/assets/imgs/reino_fuego/gallery/reino_fuego_gallery_5.png",
    ]
    this.habitantes = [
      {id: 1,title: "Princesa Llama", descripcion: "La Reina Llama (anteriormente conocida como Princesa Llama, verdaderamente llamada Phoebe [ Fibi ]) es uno de los personajes principales de Hora de Aventura.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_1.png"},
      {id: 2,title: "Rey Llama", descripcion: "El Rey Flama (Rey Llama en España y Flame King en E.U.A) es un personaje que apareció por primera vez en el episodio Incendio. Él era el gobernante del Reino del Fuego (hasta que su hija lo destronó) y padre de la Princesa Flama.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_2.png"},
      {id: 3,title: "Conde de fuego", descripcion: "El Conde de Fuego (Don Fuego en España y Fire Count en Estados Unidos) es un villano que aparece en el episodio Su Héroe. Lleva una corona, por lo que fue un gobernante anterior del Reino del Fuego. La única cosa dentro de él son sus expresiones faciales. Él puede ser considerado una representación de Rey Helado, en el sentido de que Finn es el Billy de la Tierra de Ooo. ",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_3.png"},
      {id: 4,title: "Flint", descripcion: "Flint es el hijo primogénito del Rey Flama y el hermano de la Princesa Flama. Según lo declarado por la Princesa Flama en El Traje de Jake, su hermano mayor trabaja en la milicia. Parece que no les gusta cuando alguien es intolerante a su familia y es un poco sobre-protector con respecto a la Princesa Flama. También se ve que tiene un corto temperamento, amenazando a su hermanito pequeño si no ayudaba en El Enfriamiento.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_4.png"},
      {id: 5,title: "Hemanos menores de la princesa flama", descripcion: "Los Hermanos Menores de la Princesa Flama son los hijos del Rey Flama y los hermanos de la Princesa Flama. No se sabe mucho acerca de los dos. Uno de ellos luce similar al Rey Flama ya que lleva una corona y vestuario parecidos al del Rey, mientras que el otro no lleva una corona.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_5.png"},
      {id: 6,title: "Guardián de fuego", descripcion: "Los Guardianes de Fuego aparecen cuando ellos protegían el Palacio de Fuego en los episodios: Incendio, Punto de Ignición, Tierra y Agua y El Trono Rojo. En Incendio, ellos se muestran defendiendo la entrada del palacio y al Rey Flama. En ese episodio, se ve que son amigos de Flambo, ya que lo dejan pasar sin inconvenientes.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_6.png"},
      {id: 7,title: "Bufón de fuego", descripcion: "El Bufón de Fuego debuta en el episodio Incendio. Está hecho totalmente de fuego con ojos negros. Él termina muriendo por culpa de Jake cuando, sin querer, derrama una botella de agua encima de él. Extrañamente, al Rey Flama no parece importarle su muerte, teniendo en cuenta que a él nunca le agradó su bufón.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_7.png"},
      {id: 8,title: "Juglar Llama", descripcion: "El Juglar Llama apareció en el episodio Incendio cuando Jake tomó prestada su guitarra de fuego pues tenía que interpretar la canción Siento Fuego Dentro de Mi a la Princesa Flama como regalo de parte de Finn.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_8.png"},
    ]
   }
  goToEscenarios(){
    this.route.navigate(["/escenarios"]);   
   }
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    gsap.delayedCall(1, () => ScrollTrigger.refresh());
    gsap.fromTo("img.volver_atras",{
      transform: "scale(0)"
    },{
      transform: "scale(1)"
    }).duration(.5)
    this.sectionGaleriaAnimation();
    this.introAnimation();
    this.sectionUbicationAnimation();
    this.sectionHabitantesAnimation();
  }
  sectionHabitantesAnimation(){
    let habitantesTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionHabitantes article"));
    let habitantesTimeLine_1 = new TimelineMax(this.getScrollTriggerConfig("#sectionHabitantes article"));
    habitantesTimeLine.fromTo("#sectionHabitantes article h1",.5,{
      y: -100,
      opacity: 0
    },{
      y: 0,
      opacity: 1
    }).fromTo("#sectionHabitantes article ul li:nth-child(even)",1,{
      transform: "scaleX(0)"
    },{
      transform: "scaleX(1)"
    })
    habitantesTimeLine_1.fromTo("#sectionHabitantes article ul li:nth-child(odd)",1,{
      transform: "scaleY(0)"
    },{
      transform: "scaleY(1)"
    }).delay(.5)
  }
  sectionUbicationAnimation(){
    let ubicacionTimeLine = new TimelineMax(this.getScrollTriggerConfig("#sectionUbicacion article"));
    let ubicacionTimeLine_1 = new TimelineMax(this.getScrollTriggerConfig("#sectionUbicacion article"));
    ubicacionTimeLine.fromTo("#sectionUbicacion article div:nth-child(1) h2",1,{
      x: 100,
      opacity: 0,
    },{
      x: 0,
      opacity: 1
    }).fromTo("#sectionUbicacion article div:nth-child(1) p",1,{
      transform: "scale(0)",
      x: -100,
      y: 100
    },{
      transform: "scale(1)",
      x: 0,
      y: 0
    });
    ubicacionTimeLine_1.fromTo("#sectionUbicacion article div:nth-child(2) h2",1,{
      x: -100,
      opacity: 0,
    },{
      x: 0,
      opacity: 1
    }).fromTo("#sectionUbicacion article div:nth-child(2) p",1,{
      transform: "scale(0)",
      x: 100,
      y: 100
    },{
      transform: "scale(1)",
      x: 0,
      y: 0
    });
  }
  introAnimation(){
    let introTimeLine = new TimelineMax(this.getScrollTriggerConfig("#intro article"))
    introTimeLine.fromTo("#intro article h1",1,{
      x: 100,
      y: -100,
      transform: "scaleX(0)"
    },{
      transform: "scaleX(1)",
      x: 0,
      y: 0,
    }).fromTo("#intro article p:nth-child(even)",1,{
      x: 100,
      transform: "scaleY(0)"
    },{
      x: 0,
      transform: "scaleY(1)"
    })
  }
  sectionGaleriaAnimation(){
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
  changeCard(id){
    if(id != this.habitanteSelected){
      if(window.innerWidth > 1100 && this.habitanteSelected == 0){
        console.log("se ejecuta");
        this.changeCardTimeLine.fromTo(".habitantes",.5,{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        },{
          left: 0,
          transform: "translateX(0)",
        })
      }
      if(window.innerWidth < 1100 && this.habitanteSelected == 0){
        this.changeCardTimeLine.to("#sectionHabitantes",.5,{
          height: "170vh",
        }).fromTo("#sectionHabitantes .habitantes",.5,{
          left: 0,
          transform: "translateY(0)",
        },{
        })
      }
      if(this.habitanteSelected != 0){
        
        this.changeCardTimeLine.to("#sectionHabitantes #card_"+this.habitanteSelected,.5,{
          transform: "scale(0)",
          opacity: 0,
          display: "none",
        })
      }
      this.habitanteSelected = id;
      this.changeCardTimeLine.fromTo("#sectionHabitantes #card_"+id,1,{
        transform: "scale(1)",
        opacity: 1,
        x: 100,
      },{
        display: "block",
        x: 0,
      })
    }
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
