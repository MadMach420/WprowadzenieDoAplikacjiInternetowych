import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../interfaces/Trip";
import {TripsDataService} from "../../services/trips-data.service";
import {CartService} from "../../services/cart.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-number-of-seats',
  templateUrl: './choose-number-of-seats.component.html',
  styleUrls: ['./choose-number-of-seats.component.css']
})
export class ChooseNumberOfSeatsComponent implements OnInit{
    @Input() trip: Trip | null = null;
    numberOfChosenSeats: number = 0;

    constructor(public tripsDataService: TripsDataService, public cartService: CartService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.numberOfChosenSeats = this.cartService.getNumberOfChosenTrips(this.trip);
        this.route.params.subscribe(params => {
            this.numberOfChosenSeats = this.cartService.getNumberOfChosenTrips(this.trip);
        })
    }

    increaseNumberOfChosenSeats(event: Event): void {
        event.stopPropagation();
        if (this.trip == null) return;
        this.numberOfChosenSeats++;
        this.cartService.addTrip(this.trip);
    }

    decreaseNumberOfChosenSeats(event: Event): void {
        event.stopPropagation();
        if (this.trip == null) return;
        this.numberOfChosenSeats--;
        this.cartService.removeTrip(this.trip);
    }
}
