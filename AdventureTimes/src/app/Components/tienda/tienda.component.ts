import { Component, OnInit } from '@angular/core';


import { gsap } from 'gsap';
import { ScrollTrigger,TimelineMax } from 'gsap/all';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  public compraRealizada: boolean;
  public seleccionado: string;

  public t1: string;
  public d1: string;
  public img1: string;

  public t2: string;
  public d2: string;
  public img2: string;

  public t3: string;
  public d3: string;
  public img3: string;

  public t4: string;
  public d4: string;
  public img4: string;

  public t5: string;
  public d5: string;
  public img5: string;

  public t6: string;
  public d6: string;
  public img6: string;

  constructor() {
    this.compraRealizada = false;
    this.seleccionado = '';
   }

  ngOnInit(): void {
    this.t1 = "The enchiridion & marcy's super secret scrapbook";
    this.d1 = "Este libro contiene easter eggs de la serie y pequeñas piezas del diario de toda la vida de Marceline";
    this.img1 ="../../../assets/images/enchiridion.png";

    this.t2 = "BMO taza";
    this.d2 = "Taza de cerámica de BMO perfecta para el café";
    this.img2 = "../../../assets/images/bmo_taza.png";

    this.t3 = "Peluche de Jake";
    this.d3 = "Peluche de Jake de 50cm";
    this.img3 = "../../../assets/images/peluche_jake.png";

    this.t4 = "Limoncio Figura Vinyl Pop Funko";
    this.d4 = "Figura Funko de 10cm";
    this.img4 = "../../../assets/images/limoncio_funko.png";

    this.t5 = "Hora de Aventuras La Enciclopedia";
    this.d5 = "TODO LO QUE SIEMPRE HAS QUERIDO SABER SOBRE HORA DE AVENTURAS! Escrita por el Señor del Mal Justo Chupalmas, también conocido como el padre de Marceline la Reina de los vampiros.";
    this.img5 = "../../../assets/images/enciclopedia.jpg";

    this.t6 = "HORA DE AVENTURAS Nº 12";
    this.d6 = "Guión: Hastings. Dibujo: Zack Sterling. Editorial: Norma Editorial";
    this.img6 = "../../../assets/images/comic.jpg";

    this.t5 = "Gorro de Jake";
    this.d5 = "Gorro de lana de Jake el Perro";
    this.img5 = "../../../assets/images/gorro_jake.png";

    this.t6 = "Hora de aventuras, Guerra de Cartas";
    this.d6 = "Guión: Hastings. Dibujo: Zack Sterling. Editorial: Norma Editorial";
    this.img6 = "../../../assets/images/card_wars.png";
  }

  ngAfterViewInit() : void{

    gsap.registerPlugin(ScrollTrigger);
    
    let time = new TimelineMax();
  
    var sections = gsap.utils.toArray('.tarjeta');

    sections.forEach((section : any) => {
        gsap.to(section, { autoAlpha: 0,
        scrollTrigger: {
            trigger: <Element>section,
            start: 'top',
            scrub: true,
            end: '=250',
            }
        });
    })

  }

  pow(title: string) {
    this.compraRealizada=!this.compraRealizada;
    this.seleccionado = title;
  }

}
