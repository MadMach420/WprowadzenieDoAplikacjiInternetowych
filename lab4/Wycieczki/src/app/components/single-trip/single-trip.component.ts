import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Trip} from "../../interfaces/Trip";
import {TripsDataService} from "../../services/trips-data.service";

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {
    trip: Trip | null = null;
    displayEditForm: boolean = false;

    constructor(private route: ActivatedRoute, private tripsDataService: TripsDataService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.tripsDataService.getTripById(params['id']).subscribe(elem => {
                this.trip = elem;
            });
        })
    }
}
