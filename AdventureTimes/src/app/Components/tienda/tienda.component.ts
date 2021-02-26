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

  constructor() {
    this.compraRealizada = false;
    this.seleccionado = '';
   }

  ngOnInit(): void {
    this.t1 = "The enchiridion & marcy's super secret scrapbook";
    this.d1 = "Este libro contiene easter eggs de la serie y pequeñas piezas del diario de toda la vida de Marceline";
    this.img1 ="../../../assets/images/enchiridion.png";
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
            end: '+=250',
            }
        });
    })

  }

  pow(title: string) {
    this.compraRealizada=!this.compraRealizada;
    this.seleccionado = title;
  }

}
