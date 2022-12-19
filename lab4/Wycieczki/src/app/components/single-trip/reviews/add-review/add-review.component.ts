import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ReviewService} from "../../../../services/review.service";
import {Review} from "../../../../interfaces/Review";
import {TripsDataService} from "../../../../services/trips-data.service";
import {Trip} from "../../../../interfaces/Trip";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
    @Input() trip: Trip | null = null;
    tripName: string = '';
    nick: FormControl = new FormControl('', Validators.required);
    name: FormControl = new FormControl('', Validators.required);
    text: FormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(500)
    ]);
    date: FormControl = new FormControl();
    rating: number = 0;
    showRatingError: boolean = false;

    constructor(private reviewService: ReviewService, private tripsDataService: TripsDataService) {
    }

    ngOnInit() {
        if (this.trip) {
            this.tripName = this.trip.name;
            this.name.setValue(this.tripName);
        }
    }

    ratingChosen(n: number): void {
        this.rating = n
        this.showRatingError = false
    }

    submitReview(): void {
        if (this.rating == 0) {
            this.showRatingError = true;
            return;
        }
        if (this.nick.valid && this.name.valid && this.text.valid) {
            let newReview: Review;
            if (this.date.value !== null) {
                newReview = {
                    nick: this.nick.value,
                    rating: this.rating,
                    text: this.text.value,
                    date: this.date.value.toString()
                };
            } else {
                newReview = {
                    nick: this.nick.value,
                    rating: this.rating,
                    text: this.text.value
                };
            }
            this.reviewService.addNewReview(newReview, this.name.value);
            if (this.trip) this.tripsDataService.updateTripRating(this.trip, this.rating);

            this.nick.setValue('');
            this.nick.markAsUntouched();
            this.nick.markAsPristine();
            this.name.setValue(this.tripName);
            this.name.markAsUntouched();
            this.name.markAsPristine();
            this.rating = 0;
            this.text.setValue('');
            this.text.markAsUntouched();
            this.text.markAsPristine();
            this.date.setValue(null);
        }
    }
}
