import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChooseNumberOfSeatsComponent} from './choose-number-of-seats/choose-number-of-seats.component';
import {DisplayTripsComponent} from './display-trips/display-trips.component';
import {TripCardComponent} from "./display-trips/trip-card/trip-card.component";
import { TopBarComponent } from './display-trips/top-bar/top-bar.component';
import { AddTripComponent } from './display-trips/add-trip/add-trip.component';
import { AddTripFormComponent } from './display-trips/add-trip/add-trip-form/add-trip-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { CartItemComponent } from './display-cart/cart-item/cart-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        TripCardComponent,
        ChooseNumberOfSeatsComponent,
        DisplayTripsComponent,
        TripCardComponent,
        TopBarComponent,
        AddTripComponent,
        AddTripFormComponent,
        DisplayCartComponent,
        CartItemComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
