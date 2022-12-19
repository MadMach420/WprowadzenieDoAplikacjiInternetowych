import {Component, Input} from '@angular/core';
import {CartItem} from "../../../interfaces/CartItem";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
    @Input() item: CartItem | null = null;

    constructor(public cartService: CartService) {
    }
}
