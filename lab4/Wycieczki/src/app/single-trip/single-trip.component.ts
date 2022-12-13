import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Trip} from "../Trip";
import {TripsDataService} from "../trips-data.service";

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {
    trip: Trip | null = null;

    constructor(private route: ActivatedRoute, private tripsDataService: TripsDataService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            let id = params['id'];
            // TODO
            //  Do zmiany na branie z observable, po id
        })
    }
}
