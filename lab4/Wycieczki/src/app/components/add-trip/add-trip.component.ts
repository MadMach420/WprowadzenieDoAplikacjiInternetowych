import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TripsDataService} from "../../services/trips-data.service";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {
    datesNotSubsequent: boolean = false;

    formGroup: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        sdate: new FormControl('', Validators.required),
        edate: new FormControl('', Validators.required),
        price: new FormControl('', [ Validators.required, Validators.min(1)]),
        seats: new FormControl('', [ Validators.required, Validators.min(0)]),
        desc: new FormControl('', Validators.required),
        thumbnail: new FormControl('', Validators.required),
        photo: new FormControl('', Validators.required),
    });

    constructor(public tripDataService: TripsDataService) {
    }

    submitTrip() {
        if (this.formGroup.controls['sdate'].value > this.formGroup.controls['edate'].value) {
            this.datesNotSubsequent = true;
            return;
        }
        this.datesNotSubsequent = false;

        const newTrip: any = {
            name: this.formGroup.controls['name'].value,
            country: this.formGroup.controls['country'].value,
            startDate: this.formGroup.controls['sdate'].value,
            endDate: this.formGroup.controls['edate'].value,
            price: this.formGroup.controls['price'].value,
            seats: this.formGroup.controls['seats'].value,
            description: this.formGroup.controls['desc'].value,
            thumbnailURL: this.formGroup.controls['thumbnail'].value,
            photosURLs: this.formGroup.controls['photo'].value.split(","),
            availableSeats: this.formGroup.controls['seats'].value,
            starRating: 0,
            numberOfReviews: 0
        };

        this.tripDataService.addTrip(newTrip);

        this.formGroup.reset();
    }
}
