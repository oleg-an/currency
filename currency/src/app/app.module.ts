import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CurrencyComponent} from '../currency/currency.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CurrencyComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
