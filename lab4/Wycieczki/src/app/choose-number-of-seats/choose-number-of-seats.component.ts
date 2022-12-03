import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../Trip";
import {TripsDataService} from "../trips-data.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-choose-number-of-seats',
  templateUrl: './choose-number-of-seats.component.html',
  styleUrls: ['./choose-number-of-seats.component.css']
})
export class ChooseNumberOfSeatsComponent implements OnInit{
    @Input() trip: Trip | null = null;
    numberOfChosenSeats: number = 0;

    constructor(public tripsDataService: TripsDataService, public cartService: CartService) {
    }

    ngOnInit() {
        this.numberOfChosenSeats = this.cartService.getNumberOfChosenTrips(this.trip);
    }

    increaseNumberOfChosenSeats(): void {
        if (this.trip == null) return;
        this.numberOfChosenSeats++;
        this.cartService.addTrip(this.trip);
        this.trip.availableSeats--;
    }

    decreaseNumberOfChosenSeats(): void {
        if (this.trip == null) return;
        this.numberOfChosenSeats--;
        this.cartService.removeTrip(this.trip);
        this.trip.availableSeats++;
    }
}
