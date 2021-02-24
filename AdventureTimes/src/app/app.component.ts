import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, circularMaskAnimation } from './animations/router.animations';

@Component({
  selector: 'app-root',
  animations: [circularMaskAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdventureTimes';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  
}

