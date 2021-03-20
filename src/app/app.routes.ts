import { Routes }        from '@angular/router'
import * as synchronise  from './synchronise'

/**
 * Routes configuration
 */
export const APP_ROUTES: Routes = [
  { path: 'synchronise', component: synchronise.MainComponent },
  { path: '', children: [
    { path: '**', redirectTo: 'synchronise', pathMatch: 'full' }
  ] }
]
