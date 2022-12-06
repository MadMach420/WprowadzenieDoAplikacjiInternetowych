import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { DisplayTripsComponent } from './display-trips/display-trips.component';

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  { path: 'trips', component: DisplayTripsComponent },
  { path: 'cart', component: DisplayCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }