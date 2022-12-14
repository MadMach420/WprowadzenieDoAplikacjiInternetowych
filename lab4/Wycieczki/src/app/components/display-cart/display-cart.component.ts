import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent {

    constructor(public cartService: CartService) {
    }

    calculateTotalPrice(): number {
        return this.cartService.cartItems
            .reduce((acc, elem) => acc + elem.trip.price * elem.chosenNumberOfTrips, 0);
    }
}
