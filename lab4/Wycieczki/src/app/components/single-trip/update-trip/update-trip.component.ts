import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TripsDataService} from "../../../services/trips-data.service";
import {Trip} from "../../../interfaces/Trip";

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
    @Input() trip: Trip | null = null;
    datesNotSubsequent: boolean = false;

    formGroup: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        sdate: new FormControl('', Validators.required),
        edate: new FormControl('', Validators.required),
        price: new FormControl('', [ Validators.required, Validators.min(1)]),
        seats: new FormControl('', [ Validators.required, Validators.min(0)]),
        availableSeats: new FormControl('', [ Validators.required, Validators.min(0)]),
        desc: new FormControl('', Validators.required),
        thumbnail: new FormControl('', Validators.required),
        photo: new FormControl('', Validators.required),
    });

    constructor(public tripDataService: TripsDataService) {
    }

    ngOnInit() {
        this.formGroup.controls['name'].setValue(this.trip?.name);
        this.formGroup.controls['country'].setValue(this.trip?.country);
        this.formGroup.controls['sdate'].setValue(this.trip?.startDate);
        this.formGroup.controls['edate'].setValue(this.trip?.endDate);
        this.formGroup.controls['price'].setValue(this.trip?.price);
        this.formGroup.controls['seats'].setValue(this.trip?.seats);
        this.formGroup.controls['availableSeats'].setValue(this.trip?.availableSeats);
        this.formGroup.controls['desc'].setValue(this.trip?.description);
        this.formGroup.controls['thumbnail'].setValue(this.trip?.thumbnailURL);
        console.log(this.trip?.photosURLs.toString());
        this.formGroup.controls['photo'].setValue(this.trip?.photosURLs.toString());
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
        };

        if (this.trip) this.tripDataService.updateTripDetails(this.trip, newTrip);

        this.formGroup.reset();
    }
}
