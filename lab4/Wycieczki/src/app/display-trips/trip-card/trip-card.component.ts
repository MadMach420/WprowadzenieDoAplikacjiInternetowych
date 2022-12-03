import {Component, Input} from '@angular/core';
import {Trip} from "../../Trip";
import {TripsDataService} from "../../trips-data.service";

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
    @Input() trip: Trip | null = null;
    @Input() color: string = 'black';

    constructor(public tripsDataService: TripsDataService) {
    }
}
