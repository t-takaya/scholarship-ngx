import { NgModule }     from '@angular/core'
import { RouterModule } from '@angular/router'
import * as synchronise  from './synchronise'
import { APP_ROUTES }    from './app.routes'

// Dependency module
//~~~~~~~~~~~~~~~~~~~
const MODULES = [
  synchronise.ViewsModule,
  RouterModule.forChild(APP_ROUTES)
]

// Module Definition
//~~~~~~~~~~~~~~~~~~~~
@NgModule({ imports: MODULES })
export class AppModule {}
