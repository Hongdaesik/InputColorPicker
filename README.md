## InputColorPicker Angular Library.

A library of color pickers in input format.

You can check out the demo <a href="https://bettep.org/input-color-picker">here</a>.

![Excute](https://raw.githubusercontent.com/Hongdaesik/InputColorPicker/master/DEMO.gif)

<br><br>

## Installation

```bash
npm install --save input-color-picker
```

<br><br>

## Usage

Import into your @NgModule.
```typescript
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { InputColorPickerModule } from 'input-color-picker'

@NgModule({

  imports: [

    FormsModule,
    InputColorPickerModule
  ],
  declarations: []
})
export class MyModule {}
```

<br><br>

Then, using your component.
```typescript
@Component( {

  selector: 'app',
  template: '<input-color-picker [(ngModel)]="color" [col]="40" [boxHeight]="48" [colorWidth]="20" [colorHeight]="20" [placeholder]="\'Color selection\'"></input-color-picker>'
} )
export class AppComponent {

  public color: string

  /* Optional */
  this.palette = [ { code: '#ffffff', name: 'White' } ... ]
}
```

<br><br>

## Parameter
|Name|Type|Description|Default|
|---|---|---|---|
|[col]|number|Number of colors to include in one line|40|
|[palette]|array|[ { "code": "#ffffff", "name": "White" } ... ]|If you set a value, the palette will change to that value.|
|[boxHeight]|number|Box height (px)|48|
|[colorWidth]|number|Color width (px)|20|
|[colorHeight]|number|Color height (px)|20|
|[placeholder]|string|Placeholder before color selection|'Color selection'|

<br><br>

## Change Log

`1.0.0` : Initial release.
`1.0.2` : Remove package dependency.

<br><br>

## License

MIT

<br><br>

## Other programs

<https://bettep.org>