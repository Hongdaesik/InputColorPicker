import {
  Input,
  Component,
  Directive,
  ViewChild,
  ElementRef,
  forwardRef
} from '@angular/core'
import {
  NG_VALUE_ACCESSOR
} from '@angular/forms'

import defaultPalette from './palette.json'

export class Color {

  public x: number
  public y: number

  public palette: Palette

  constructor ( x: number, y: number, palette: Palette ) {

    this.x = x
    this.y = y

    this.palette = palette
  }
}

export class Palette {

  public code: string
  public name: string

  constructor ( code: string, name: string ) {

    this.code = code
    this.name = name
  }
}

@Directive()
export class InputColorPickerDirective {

  public raw: string | undefined

  public onChange: any = () => {}
  public onTouched: any = () => {}

  @Input () public col: number = 40

  @Input () public palette ? : Array < Palette > ;

  @Input () public boxHeight: number = 48

  @Input () public colorWidth: number = 20

  @Input () public colorHeight: number = 20

  @Input () public placeholder: string = 'Color selection'

  constructor () {}

  get value (): string | undefined {

    return this.raw
  }

  set value ( raw: string | undefined ) {

    if ( this.raw !== raw ) this.raw = raw
  }

  writeValue ( raw: string ) {

    this.raw = raw
  }

  registerOnChange ( func: any ): void {

    this.onChange = func
  }

  registerOnTouched ( func: any ): void {

    this.onTouched = func
  }
}

@Component( {
  selector: 'input-color-picker',
  templateUrl: './input-color-picker.component.html',
  styleUrls: [ './input-color-picker.component.scss' ],
  providers: [ {

    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => InputColorPickerComponent )
  } ]
} )
export class InputColorPickerComponent extends InputColorPickerDirective {

  public box: any
  public hover ? : Color
  public picker!: Array < Color > ;

  @ViewChild ( 'elementSVG' ) elementSVG!: ElementRef

  constructor ( private element: ElementRef ) {

    super()

    this.ngOnLoad()
  }

  ngOnLoad (): void {

    if ( !this.palette || this.palette?.length < 1 ) this.palette = defaultPalette

    this.box = [ 0, 0, this.col * this.colorWidth, this.colorHeight * Math.ceil( this.palette.length / this.col ) ].join( ' ' )

    this.picker = Array.from( this.palette, ( p: Palette, i: number ) => new Color( this.colorWidth * ( i % this.col ), this.colorHeight * Math.floor( i / this.col ), p ) )
  }

  ngOnChanges (): void {

    this.ngOnLoad()
  }

  /* Action */
  onOpen (): void {

    this.element.nativeElement.querySelector( '.modal-container' ).classList.add( 'active' )
  }

  onClose (): void {

    this.element.nativeElement.querySelector( '.modal-container' ).classList.remove( 'active' )
  }

  onClick ( i: number ): void {

    this.value = this.palette![ i ].code

    this.onChange( this.value )

    this.onClose()
  }

  onInput (): void {

    this.onChange( this.value )

    if ( this.value && this.value.length ) return

    this.onClose()
  }

  onEnter ( event ? : any, index ? : number ): void {

    let tooltip = this.element.nativeElement.querySelector( '.tooltip' )

    if ( event ) {

      this.hover = this.picker[ index! ]

      let parent = this.elementSVG.nativeElement.getBoundingClientRect()

      let client = event.target.getBoundingClientRect()

      let scroll = this.element.nativeElement.querySelector( '.palette-container' ).scrollTop

      tooltip.style.top = `${ client.top - parent.top - scroll }px`

      tooltip.style.left = `${ client.left - parent.left }px`

      return
    }

    tooltip.classList.add( 'active' )
  }

  onLeave (): void {

    this.element.nativeElement.querySelector( '.tooltip' ).classList.remove( 'active' )
  }

  /* Get */
  get getGray (): boolean {

    return this.raw ? false : true
  }

  get getText (): string {

    return this.raw || this.placeholder
  }
}