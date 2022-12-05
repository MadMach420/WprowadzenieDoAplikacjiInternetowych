import {Injectable} from '@angular/core';
import { Trip } from './Trip'
import trips from 'src/assets/jsons/trips.json'

@Injectable({
    providedIn: 'root'
})
export class TripsDataService {
    trips: Trip[] = [];
    // totalNumberOfChosenTrips: number = 0;

    constructor() {
        this.getTrips();
    }

    getTrips(): void {
        this.trips = trips;
    }

    removeTrip(trip: Trip): void {
        for (let i = 0; i < this.trips.length; i++) {
            if (this.trips[i] === trip) {
                this.trips.splice(i, 1);
                break;
            }
        }
    }

    addTrip(trip: Trip): void {
        this.trips.push(trip);
    }

    getColor(trip: Trip): string {
        if (trip.availableSeats == 0) {
            return 'gray';
        }

        let mostExpensive: boolean = true;
        let leastExpensive: boolean = true;

        this.trips.forEach(elem => {
            if (elem.availableSeats > 0) {
                if (elem.price > trip.price) {
                    mostExpensive = false;
                }
                if (elem.price < trip.price) {
                    leastExpensive = false;
                }
            }
        })

        if (mostExpensive) {
            return 'green';
        } else if (leastExpensive) {
            return 'red';
        } else {
            return 'gray';
        }
    }
}
