import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DoubleSliderBarComponent} from './doublesliderbar/DoubleSliderBar.component';
import {ShowSliderValueComponent} from './showslideevalue/ShowSliderValue.component';

@NgModule({
  declarations: [
    AppComponent,
    DoubleSliderBarComponent,
    ShowSliderValueComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
