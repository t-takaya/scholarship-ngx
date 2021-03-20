import { Component }                          from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Select }                             from '@ngxs/store'
import { Observable }                         from 'rxjs'
import { MainState }                          from './main.state'

@Component({
  templateUrl: './main.html',
  styleUrls:  ['./main.scss']
})

export class MainComponent {
  formGroup = new FormGroup({
    id:            new FormControl(null, Validators.required),
    password:      new FormControl(null, Validators.required),
    memberNumber1: new FormControl(null, Validators.required),
    memberNumber2: new FormControl(null, Validators.required),
    memberNumber3: new FormControl(null, Validators.required),
  })

  @Select(MainState) state$: Observable<MainState.Model>

  onSubmit(): void {
    console.log('MainState.actPost.emit(this.formGroup.value)')
    MainState.actPost.emit(this.formGroup.value)
  }
}
