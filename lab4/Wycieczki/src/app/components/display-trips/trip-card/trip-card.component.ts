import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../../interfaces/Trip";
import {TripsDataService} from "../../../services/trips-data.service";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
    selector: 'app-trip-card',
    templateUrl: './trip-card.component.html',
    styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
    @Input() trip: Trip | null = null;
    @Input() color: string = 'black';
    stars: number = 3;

    constructor(public tripsDataService: TripsDataService, public authService:AuthenticationService) {
    }

    ngOnInit() {
        if (this.trip === null) return;
        this.stars = this.trip.starRating;
    }
}
