import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BStestComponent } from './components/bstest/bstest.component';


@NgModule({
  declarations: [
    AppComponent,
    BStestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, BStestComponent]
})
export class AppModule { }
