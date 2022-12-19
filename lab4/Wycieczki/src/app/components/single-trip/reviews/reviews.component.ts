import {Component, Input} from '@angular/core';
import {ReviewService} from "../../../services/review.service";
import {Trip} from "../../../interfaces/Trip";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
    @Input() trip: Trip | null = null;
    displayAddReviewForm: boolean = false;

    constructor(public reviewService: ReviewService) {
    }
}
