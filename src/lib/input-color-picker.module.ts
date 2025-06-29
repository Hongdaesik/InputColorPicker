import {
  NgModule
} from '@angular/core'
import {
  FormsModule
} from '@angular/forms'
import {
  CommonModule
} from '@angular/common'

import {
  InputColorPickerComponent
} from './input-color-picker'

@NgModule( {

  imports: [

    FormsModule,
    CommonModule,

    InputColorPickerComponent
  ],
  exports: [

    InputColorPickerComponent
  ]
} )
export class InputColorPickerModule {}