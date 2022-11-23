import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChooseMakeComponent } from './choose-make/choose-make.component';
import { ChooseModelComponent } from './choose-make/choose-model/choose-model.component';
import {FormsModule} from "@angular/forms";
import { DisplayModelComponent } from './choose-make/choose-model/display-model/display-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseMakeComponent,
    ChooseModelComponent,
    DisplayModelComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
