import {Injectable} from '@angular/core';
import {CartItem} from "./CartItem";
import {Trip} from "./Trip";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: CartItem[] = [];
    totalNumberOfChosenTrips: number = 0;

    constructor() {
    }

    addTrip(trip: Trip): void {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].trip === trip) {
                this.cartItems[i].chosenNumberOfTrips++;
                this.totalNumberOfChosenTrips++;
                return;
            }
        }

        this.cartItems.push({ trip: trip, chosenNumberOfTrips: 1 });
        this.totalNumberOfChosenTrips++;
    }

    removeTrip(trip: Trip): void {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].trip === trip) {
                this.cartItems[i].chosenNumberOfTrips--;
                if (this.cartItems[i].chosenNumberOfTrips === 0) {
                    this.cartItems.splice(i, 1);
                }
                this.totalNumberOfChosenTrips--;
                return;
            }
        }
    }

    getNumberOfChosenTrips(trip: Trip | null): number {
        if (trip !== null) {
            for (let i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].trip === trip) {
                    return this.cartItems[i].chosenNumberOfTrips;
                }
            }
        }
        return 0;
    }
}
