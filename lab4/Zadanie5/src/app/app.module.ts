import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChooseMakeComponent} from './choose-make/choose-make.component';
import {ChooseModelComponent} from './choose-make/choose-model/choose-model.component';
import {FormsModule} from "@angular/forms";
import { ChooseColorComponent } from './choose-make/choose-model/choose-color/choose-color.component';
import { DisplayModelComponent } from './choose-make/choose-model/choose-color/display-model/display-model.component';

@NgModule({
    declarations: [
        AppComponent,
        ChooseMakeComponent,
        ChooseModelComponent,
        ChooseColorComponent,
        DisplayModelComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
