import {Component, Input} from '@angular/core';
import {CartItem} from "../../CartItem";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
    @Input() item: CartItem | null = null;
}
