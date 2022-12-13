import {Component, OnDestroy, OnInit} from '@angular/core';
import {TripsDataService} from "../trips-data.service";
import {Trip} from "../Trip";

@Component({
  selector: 'app-display-trips',
  templateUrl: './display-trips.component.html',
  styleUrls: ['./display-trips.component.css']
})
export class DisplayTripsComponent implements OnInit {
    trips: Trip[] | null = null;

    constructor(public tripsDataService: TripsDataService) {
    }

    ngOnInit(): void {
        this.getTrips();
    }

    getTrips() {
        this.tripsDataService.trips.subscribe(data => {
            this.trips = data;
        });
    }

    getColor(trip: Trip): string {
        if (!this.trips) return 'gray';
        if (trip.availableSeats == 0) {
            return 'gray';
        }

        let mostExpensive: boolean = true;
        let leastExpensive: boolean = true;

        this.trips.forEach(elem => {
            if (elem.availableSeats) {
                if (elem.price > trip.price) {
                    mostExpensive = false;
                } else if (elem.price < trip.price) {
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
