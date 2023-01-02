import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChooseNumberOfSeatsComponent} from './components/choose-number-of-seats/choose-number-of-seats.component';
import {DisplayTripsComponent} from './components/display-trips/display-trips.component';
import {TripCardComponent} from "./components/display-trips/trip-card/trip-card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DisplayCartComponent } from './components/display-cart/display-cart.component';
import { CartItemComponent } from './components/display-cart/cart-item/cart-item.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { StarComponent } from './components/star-rating/star/star.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleTripComponent } from './components/single-trip/single-trip.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { SinglePurchaseComponent } from './components/purchase-history/single-purchase/single-purchase.component';
import { FilterByStatusPipe } from './pipes/filter-by-status.pipe';
import { UpcomingTripsComponent } from './components/navbar/upcoming-trips/upcoming-trips.component';
import { PhotoCarouselComponent } from './components/single-trip/photo-carousel/photo-carousel.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ReviewsComponent } from './components/single-trip/reviews/reviews.component';
import { SingleReviewComponent } from './components/single-trip/reviews/single-review/single-review.component';
import { AddReviewComponent } from './components/single-trip/reviews/add-review/add-review.component';
import { UpdateTripComponent } from './components/single-trip/update-trip/update-trip.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        TripCardComponent,
        ChooseNumberOfSeatsComponent,
        DisplayTripsComponent,
        TripCardComponent,
        DisplayCartComponent,
        CartItemComponent,
        StarRatingComponent,
        StarComponent,
        SingleTripComponent,
        NavbarComponent,
        HomeComponent,
        AddTripComponent,
        PurchaseHistoryComponent,
        SinglePurchaseComponent,
        FilterByStatusPipe,
        UpcomingTripsComponent,
        PhotoCarouselComponent,
        CurrencyPipe,
        ReviewsComponent,
        SingleReviewComponent,
        AddReviewComponent,
        UpdateTripComponent,
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
