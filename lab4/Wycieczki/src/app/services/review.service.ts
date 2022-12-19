import { Injectable } from '@angular/core';
import {ReviewsByTrip} from "../interfaces/ReviewsByTrip";
import {Review} from "../interfaces/Review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
    allReviews: ReviewsByTrip[] = [];

    constructor() { }

    getReviewsByTripName(name: string): Review[] {
        for (let i = 0; i < this.allReviews.length; i++) {
            if (this.allReviews[i].tripName === name) {
                return this.allReviews[i].reviews;
            }
        }
        return [];
    }

    addNewReview(review: Review, tripName: string): void {
        for (let i = 0; i < this.allReviews.length; i++) {
            if (this.allReviews[i].tripName === tripName) {
                this.allReviews[i].reviews.push(review);
                return;
            }
        }
        this.allReviews.push({
            tripName: tripName,
            reviews: [review]
        })
    }
}
