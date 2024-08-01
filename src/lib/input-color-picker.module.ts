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
} from './input-color-picker.component'

@NgModule( {
  declarations: [

    InputColorPickerComponent
  ],
  imports: [

    FormsModule,
    CommonModule,
  ],
  exports: [

    InputColorPickerComponent
  ]
} )
export class InputColorPickerModule {}