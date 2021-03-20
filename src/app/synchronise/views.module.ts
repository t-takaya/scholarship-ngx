import { NgModule }                 from '@angular/core'
import { CommonModule }             from '@angular/common'
import { HttpClientModule }         from '@angular/common/http'
import { ReactiveFormsModule }      from '@angular/forms'
import { RouterModule }             from '@angular/router'
import { A11yModule }               from '@angular/cdk/a11y'
import { BidiModule }               from '@angular/cdk/bidi'
import { OverlayModule }            from '@angular/cdk/overlay'
import { PlatformModule }           from '@angular/cdk/platform'
import { ObserversModule }          from '@angular/cdk/observers'
import { PortalModule }             from '@angular/cdk/portal'
import { DragDropModule }           from '@angular/cdk/drag-drop'
import { TextFieldModule }          from '@angular/cdk/text-field'
import { MatFormFieldModule }       from '@angular/material/form-field'
import { MatInputModule  }          from '@angular/material/input'
import { NgxsModule }               from '@ngxs/store'
import { MainState }                from './main.state'
import * as views                   from './views'

const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
  A11yModule,
  BidiModule,
  OverlayModule,
  PlatformModule,
  ObserversModule,
  PortalModule,
  DragDropModule,
  TextFieldModule,
  MatFormFieldModule,
  MatInputModule,
  NgxsModule.forFeature([ MainState ])
]

const VIEW_COMPONENTS = [
  views.MainComponent,
]

const MODAL_COMPONENTS = []

@NgModule({
  imports:         MODULES,
  exports:       [ MODAL_COMPONENTS, VIEW_COMPONENTS ],
  declarations:  [ MODAL_COMPONENTS, VIEW_COMPONENTS ],
  entryComponents: MODAL_COMPONENTS
})
export class ViewsModule {}
