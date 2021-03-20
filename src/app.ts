import { Component }        from '@angular/core'
import { RouterOutlet }     from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { slideInAnimation } from './app.animations'

// Main Component
//~~~~~~~~~~~~~~~~
@Component({
  selector:   'ngx-app-root',
  templateUrl:  './app.html',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {

  //-- [ Methods ] -------------------------------------------------------------
  /**
   * Set default lang
   */
  constructor(translate: TranslateService) {
    translate.setDefaultLang('ja')
    translate.use('ja')
  }

  /**
   * Assigns an animation state value to the animation trigger
   * (@routeAnimation) based on the route configuration data property value.
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet
      &&   outlet.activatedRouteData
      &&   outlet.activatedRouteData.animation
  }
}
