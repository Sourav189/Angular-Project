import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//later instlled modules import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
    //specifies the view classes that belong to a particular module
    //view classes are in the form of containers directives and pipes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule
  ],
  providers: [],//provide all the services
  bootstrap: [AppComponent]
})
export class AppModule { }
