import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PajaxService } from 'src/app/Servicio/pajax.service';
import { environment } from 'src/environments/environment';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { gsap } from 'gsap';
import { ScrollTrigger,TimelineMax } from 'gsap/all';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  template:`
    <div class="modal-content" ></div>
  `
})
export class EpisodiosComponent implements OnInit {

  public seasons ;
  public urlimg = environment.urlImg;
  public idSeason : number;
  
  constructor(private peti : PajaxService, private modalService: NgbModal) {
  }
  
   mostrarModalInfo(myModalInfo,id : number=null) : void{
     this.modalService.open(myModalInfo,
      {
      ariaLabelledBy: 'modal-basic-title', 
      size: 'lg'
  });
     this.idSeason = id;  
   }
   
  open(content : any, id : number = null) : void {
    this.modalService.open(content);
    this.idSeason = id;  
  }

  ngOnInit(): void {
    this.peti.getSeassons().subscribe(d => {
      this.seasons = d;
    });
  }
  
  ngAfterViewInit() : void{
    gsap.registerPlugin(ScrollTrigger);
    
    let time = new TimelineMax();
    setTimeout(()=> {
    var sections = gsap.utils.toArray('.temp');

    sections.forEach((section : any) => {
        gsap.to(section, { autoAlpha: 0,
        scrollTrigger: {
            trigger: <Element>section,
            start: 'top',
            scrub: true,
            end: '+=400',
            }
        });
    })

    sections.forEach((section) =>{
      time.fromTo(<any>section,{
        autoAlpha:0
      },{
        autoAlpha:1
      }).duration(6)
    })}, 300)
  }
}