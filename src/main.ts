import { enableProdMode }         from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import {env, MainModule} from './main.module'
import 'moment/min/locales'

if (env.production) {
  enableProdMode()
}
platformBrowserDynamic()
  .bootstrapModule(MainModule)
  .catch(err => console.error(err))
