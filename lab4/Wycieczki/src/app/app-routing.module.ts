import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayCartComponent} from './components/display-cart/display-cart.component';
import {DisplayTripsComponent} from './components/display-trips/display-trips.component';
import {SingleTripComponent} from "./components/single-trip/single-trip.component";
import {HomeComponent} from "./components/home/home.component";
import {AddTripComponent} from "./components/add-trip/add-trip.component";
import {PurchaseHistoryComponent} from "./components/purchase-history/purchase-history.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'trips', component: DisplayTripsComponent},
    {path: 'trips/:id', component: SingleTripComponent},
    {path: 'add-trip', component: AddTripComponent},
    {path: 'cart', component: DisplayCartComponent},
    {path: 'history', component: PurchaseHistoryComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
