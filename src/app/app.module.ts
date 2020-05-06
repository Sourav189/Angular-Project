import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//later instlled modules import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';
import { DishService } from "./services/dish.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailsComponent
    //specifies the view classes that belong to a particular module
    //view classes are in the form of containers directives and pipes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [
    DishService
  ],//provide all the services
  bootstrap: [AppComponent]
})
export class AppModule { }
