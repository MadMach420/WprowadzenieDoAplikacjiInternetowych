import {Injectable} from '@angular/core';
import { Trip } from '../interfaces/Trip'
import {map, Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {CartItem} from "../interfaces/CartItem";
import {PurchaseHistoryService} from "./purchase-history.service";

@Injectable({
    providedIn: 'root'
})
export class TripsDataService {
    tripsRef: AngularFireList<Trip>;
    trips: Observable<Trip[]>;

    constructor(private db: AngularFireDatabase, private purchaseHistoryService: PurchaseHistoryService) {
        this.tripsRef = this.db.list<Trip>('trips');
        this.trips = this.getTrips();
    }

    getTrips(): Observable<any[]> {
        return this.tripsRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }

    getTripById(id: string): Observable<any> {
        return this.db.object<Trip>(`trips/${id}`).snapshotChanges().pipe(
            map(change => ({ id: change.payload.key, ...change.payload.val() }))
        );
    }

    removeTrip(trip: Trip): void {
        this.tripsRef.remove(trip.id).then(res => console.log(res));
    }

    addTrip(trip: any): void {
        this.tripsRef.push(trip).then(res => console.log(res));
    }

    updateTripRating(trip: Trip, newRating: number): void {
        let ratingToUpdate = (trip.starRating * trip.numberOfReviews + newRating) / (trip.numberOfReviews + 1);
        ratingToUpdate = Math.round((ratingToUpdate + Number.EPSILON) * 100) / 100;
        this.tripsRef.update(trip.id, {starRating: ratingToUpdate, numberOfReviews: trip.numberOfReviews + 1})
            .then(res => console.log(res));
    }

    updateTripDetails(trip: Trip, newDetails: any): void {
        this.tripsRef.update(trip.id, newDetails).then(res => console.log(res));
    }

    purchaseTripSeats(item: CartItem): void {
        this.tripsRef.update(item.trip.id, {availableSeats: item.trip.availableSeats - item.chosenNumberOfTrips})
            .then(res => console.log(res));

        let date = new Date();
        let year = date.toLocaleString("default", { year: "numeric" });
        let month = date.toLocaleString("default", { month: "2-digit" });
        let day = date.toLocaleString("default", { day: "2-digit" });
        this.purchaseHistoryService.addItem({item: item, purchaseDate: year + '-' + month + '-' + day});
    }
}
