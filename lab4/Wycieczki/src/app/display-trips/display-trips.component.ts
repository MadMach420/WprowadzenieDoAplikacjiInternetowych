import { Component } from '@angular/core';
import {TripsDataService} from "../trips-data.service";

@Component({
  selector: 'app-display-trips',
  templateUrl: './display-trips.component.html',
  styleUrls: ['./display-trips.component.css']
})
export class DisplayTripsComponent {
    constructor(public tripsDataService: TripsDataService) {
    }
}
