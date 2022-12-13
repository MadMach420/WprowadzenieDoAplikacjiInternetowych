import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayCartComponent} from './display-cart/display-cart.component';
import {DisplayTripsComponent} from './display-trips/display-trips.component';
import {SingleTripComponent} from "./single-trip/single-trip.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'trips', component: DisplayTripsComponent},
    {path: 'trips/:id', component: SingleTripComponent},
    {path: 'cart', component: DisplayCartComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
