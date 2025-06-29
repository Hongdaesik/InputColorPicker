import {
  TestBed,
  ComponentFixture
} from '@angular/core/testing'

import {
  InputColorPickerComponent
} from './input-color-picker'

describe( 'InputColorPickerComponent', () => {
  let component: InputColorPickerComponent
  let fixture: ComponentFixture < InputColorPickerComponent > 

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
        declarations: [ InputColorPickerComponent ]
      } )
      .compileComponents()
  } )

  beforeEach( () => {
    fixture = TestBed.createComponent( InputColorPickerComponent )
    component = fixture.componentInstance
    fixture.detectChanges()
  } )

  it( 'should create', () => {
    expect( component ).toBeTruthy()
  } )
} )
