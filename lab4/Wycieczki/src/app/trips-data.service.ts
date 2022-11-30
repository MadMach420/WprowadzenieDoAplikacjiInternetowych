import {Injectable} from '@angular/core';
import { Trip } from './Trip'
import trips from 'src/assets/jsons/trips.json'

@Injectable({
    providedIn: 'root'
})
export class TripsDataService {
    trips: Trip[] = [];

    constructor() {
        this.getTrips();
    }

    getTrips(): void {
        this.trips = trips
    }

    removeTrip(trip: Trip): void {
        for (let i = 0; i < this.trips.length; i++) {
            if (this.trips[i] === trip) {
                this.trips.splice(i, 1)
                break
            }
        }
    }

    addTrip(trip: Trip): void {
        this.trips.push(trip)
    }
}
