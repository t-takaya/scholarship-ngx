import { InjectionToken, NgModule }       from '@angular/core'
import { APP_BASE_HREF }                  from '@angular/common'
import { HttpClient, HttpClientModule }   from '@angular/common/http'
import { RouterModule }                   from '@angular/router'
import { BrowserModule }                  from '@angular/platform-browser'
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'

import { NgxsModule }                       from '@ngxs/store'
import { NgxsLoggerPluginModule }           from '@ngxs/logger-plugin'
import { NgxsEmitPluginModule }             from '@ngxs-labs/emitter'
import { NgxsSelectSnapshotModule }         from '@ngxs-labs/select-snapshot'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader }              from '@ngx-translate/http-loader'

import { AppComponent } from './app'
import { AppModule }    from './app/app.module'

// Setting sassets path
declare const $
declare const __webpack_require__

const ngxName    = "main"
const deployUrl  = __webpack_require__.p
const DEPLOY_URL = new InjectionToken<number>('DEPLOY_URL')
export const env = {
  production: false
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, deployUrl + 'assets/i18n/')
}

// Module Registry
//~~~~~~~~~~~~~~~~~
const MODULES = [
  HttpClientModule,
  RouterModule.forRoot([]),
  BrowserModule,
  BrowserAnimationsModule,
  NgxsModule.forRoot([]),
  NgxsEmitPluginModule.forRoot(),
  NgxsSelectSnapshotModule.forRoot(),
  env.production ? [] : [ NgxsLoggerPluginModule.forRoot() ],
  TranslateModule.forRoot({
    loader: {
      provide:    TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps:       [ HttpClient ],
    }
  }),
  AppModule
]

// Main Module
//~~~~~~~~~~~~~
@NgModule({
  imports:      MODULES,
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [
    { provide: DEPLOY_URL,    useValue: deployUrl },
    { provide: APP_BASE_HREF, useValue: '/ngx/' + ngxName },
    {
      provide:  MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'standard', floatLabel: 'always' }
    }
  ]
})
export class MainModule { }
