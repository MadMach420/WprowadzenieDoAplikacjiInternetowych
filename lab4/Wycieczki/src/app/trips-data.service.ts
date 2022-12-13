import {Injectable} from '@angular/core';
import { Trip } from './Trip'
import {Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
    providedIn: 'root'
})
export class TripsDataService {
    tripsRef: AngularFireList<Trip>;
    trips: Observable<Trip[]>;

    constructor(private db: AngularFireDatabase) {
        this.tripsRef = this.db.list<Trip>('trips');
        this.trips = this.getTrips();
    }

    getTrips(): Observable<Trip[]> {
        return this.tripsRef.valueChanges();
    }

    removeTrip(trip: Trip): void {
        this.tripsRef.remove()
    }

    addTrip(trip: Trip): void {
        this.tripsRef.push(trip).then(res => console.log(res));
    }
}
