import {Injectable} from '@angular/core';
import {CartItem} from "../interfaces/CartItem";
import {PurchasedItem} from "../interfaces/PurchasedItem";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthenticationService} from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class PurchaseHistoryService {
    purchasedItems: PurchasedItem[] = [];

    addItem(item: PurchasedItem) {
        this.purchasedItems.push(item);
    }

    getTripStatus(item: CartItem): string {
        let currentDate: Date = new Date();
        let tripStartDate: Date = new Date(item.trip.startDate);
        let tripEndDate: Date = new Date(item.trip.endDate);
        if (currentDate < tripStartDate) {
            return 'upcoming';
        } else if (tripEndDate < currentDate) {
            return 'finished';
        } else {
            return 'in progress';
        }
    }

    filterByStatus(item: CartItem, status: string): boolean {
        if (status == 'all') {
            return true;
        } else {
            return this.getTripStatus(item) == status;
        }
    }
}
