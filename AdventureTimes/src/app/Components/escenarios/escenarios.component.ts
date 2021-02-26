import { Component, ElementRef, OnInit, ViewChild, QueryList, Query} from '@angular/core';
import {NgbCarousel, NgbSlide, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
import {gsap, TimelineLite, TweenMax} from 'gsap';
import {circularMaskAnimation, slideInAnimation} from 'src/app/animations/router.animations';
@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.scss']
})
export class EscenariosComponent implements OnInit {
  @ViewChild('section') sectionArticles: ElementRef;
  @ViewChild('circleToAnimate') circle: ElementRef;
  menuOpen: boolean = true;
  prueba = new TimelineLite();
  
  constructor() {
    gsap.delayedCall(2, () => gsap.refresh());
   }

  ngOnInit(): void {
    gsap.fromTo("article h1",{y:-100},{y: 0}).duration(1);
    
  }
  ngAfterViewInit(){
    gsap.delayedCall(2, () => ScrollTrigger.refresh());
    this.sectionArticles.nativeElement.childNodes.forEach(article => article.addEventListener('mouseenter', () => {
      gsap.fromTo("article h1",{y: -100},{y:0}).duration(.5);
      gsap.fromTo("article a", {y: 100},{y: 0}).duration(.5);
    }));

    this.sectionArticles.nativeElement.childNodes.forEach(article => article.addEventListener('mouseleave', () => {
      
    }));

  }

    public images = [
      "https://i.pinimg.com/originals/65/8d/50/658d505bd8b224f8f2dd6ec23c0f2e8c.jpg",
      "https://pm1.narvii.com/7619/6785c4e08ca1c0ea1f357c096d98ec38021340d7r5-1600-900_00.jpg",
      "https://www.lacasadeel.net/wp-content/uploads/2015/03/reino-de-hielo-hora-de-aventuras.jpg",
      "https://i.pinimg.com/originals/a4/f2/8f/a4f28f895afc3116485c0f9489941815.jpg"
    ];

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;

    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
    
    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }

    scrollToElement(target: HTMLElement) {
      target.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
    }
  }

