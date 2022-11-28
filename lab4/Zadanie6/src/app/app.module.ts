import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayObjComponent } from './display-obj/display-obj.component';
import { ObjectContainerComponent } from './object-container/object-container.component';
import { ObjectCardComponent } from './object-container/object-card/object-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayObjComponent,
    ObjectContainerComponent,
    ObjectCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
