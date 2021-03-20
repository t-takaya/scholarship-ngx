import { Component }        from '@angular/core'
import { RouterOutlet }     from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector:   'ngx-app-root',
  templateUrl:  './app.html',
  animations: []
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ja')
    translate.use('ja')
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet
      &&   outlet.activatedRouteData
      &&   outlet.activatedRouteData.animation
  }
}
