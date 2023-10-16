import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSoapModule, NgxSoapService} from "ngx-soap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSoapModule,
    AppRoutingModule
  ],
  providers: [
    NgxSoapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
