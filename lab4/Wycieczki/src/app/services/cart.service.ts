import {Injectable} from '@angular/core';
import {CartItem} from "../interfaces/CartItem";
import {Trip} from "../interfaces/Trip";
import {TripsDataService} from "./trips-data.service";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: CartItem[] = [];
    totalNumberOfChosenTrips: number = 0;

    constructor(private tripsDataService: TripsDataService) {
    }

    addTrip(trip: Trip): void {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].trip.id === trip.id) {
                this.cartItems[i].chosenNumberOfTrips++;
                this.totalNumberOfChosenTrips++;
                return;
            }
        }

        console.log(new Date(trip.startDate).toDateString())

        this.cartItems.push({ trip: trip, chosenNumberOfTrips: 1 });
        this.totalNumberOfChosenTrips++;
    }

    removeTrip(trip: Trip): void {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].trip.id === trip.id) {
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
                if (this.cartItems[i].trip.id === trip.id) {
                    return this.cartItems[i].chosenNumberOfTrips;
                }
            }
        }
        return 0;
    }

    purchaseAll(): void {
        this.cartItems.forEach(item => {
            this.tripsDataService.purchaseTripSeats(item);
        });
        this.cartItems = [];
        this.totalNumberOfChosenTrips = 0;
    }

    purchaseSingle(item: CartItem): void {
        this.tripsDataService.purchaseTripSeats(item);
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
    }
}
