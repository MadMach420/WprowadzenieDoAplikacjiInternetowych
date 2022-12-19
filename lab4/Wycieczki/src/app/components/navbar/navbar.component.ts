import {Component} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    host: { '(document:click)': 'turnOffVisibility()' }
})
export class NavbarComponent {
    upcomingVisible: boolean = false;

    constructor(public cartService: CartService) {
    }

    toggleVisibility(event: Event): void {
        event.stopPropagation();
        this.upcomingVisible = !this.upcomingVisible;
    }

    turnOffVisibility(): void {
        this.upcomingVisible = false;
    }
}
