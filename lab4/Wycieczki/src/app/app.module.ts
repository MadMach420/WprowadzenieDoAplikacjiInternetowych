import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChooseNumberOfSeatsComponent} from './choose-number-of-seats/choose-number-of-seats.component';
import {DisplayTripsComponent} from './display-trips/display-trips.component';
import {TripCardComponent} from "./display-trips/trip-card/trip-card.component";
import { AddTripComponent } from './display-trips/add-trip/add-trip.component';
import { AddTripFormComponent } from './display-trips/add-trip/add-trip-form/add-trip-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { CartItemComponent } from './display-cart/cart-item/cart-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarComponent } from './star-rating/star/star.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";


@NgModule({
    declarations: [
        AppComponent,
        TripCardComponent,
        ChooseNumberOfSeatsComponent,
        DisplayTripsComponent,
        TripCardComponent,
        AddTripComponent,
        AddTripFormComponent,
        DisplayCartComponent,
        CartItemComponent,
        StarRatingComponent,
        StarComponent,
        SingleTripComponent,
        NavbarComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
