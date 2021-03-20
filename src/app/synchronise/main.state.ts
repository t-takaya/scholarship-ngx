import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { State, StateContext } from '@ngxs/store'
import { Emitter, Emittable }            from '@ngxs-labs/emitter'
import { Receiver, EmitterAction }       from '@ngxs-labs/emitter'
import { tap} from 'rxjs/operators'
import {JsValueReadSynchroniseBalance, JsValueWriteSynchroniseBalance} from './main.json'

export namespace MainState {
  export interface Model {
    model: JsValueReadSynchroniseBalance
  }
}

@Injectable()
@State<MainState.Model>({
  name: 'synchronise', defaults: {
    model: null
  }
})
export class MainState {
  private static http: HttpClient
  private static STATE_API = {
    POST: '/api/synchronise'
  }

  constructor(http: HttpClient) {
    MainState.http = http
  }

  @Emitter(MainState.post) static actPost: Emittable<JsValueWriteSynchroniseBalance>

  @Receiver()
  static post(
    ctx:    StateContext<MainState.Model>,
    action: EmitterAction<JsValueWriteSynchroniseBalance>
  ) {
    const path = this.STATE_API.POST
    return this.http.get(path)
      .pipe(
        tap(data => {
          ctx.patchState({ model: data })
        })
      )
  }
}
