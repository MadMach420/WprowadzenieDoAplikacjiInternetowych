import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
    @Input() rating: number = 0;
    ratingChosen: boolean = false;
    hoverRating: number = 0;
    stars = [1, 2, 3, 4, 5];
    @Output() ratingChosenEvent: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {
        this.hoverRating = this.rating;
    }

    mouseEnter(i: number) {
        if (!this.ratingChosen) {
            this.hoverRating = i;
        }
    }

    mouseLeave() {
        if (!this.ratingChosen) {
            this.hoverRating = this.rating;
        }
    }

    chooseRating (i: number) {
        if (!this.ratingChosen) {
            this.ratingChosen = true;
            this.ratingChosenEvent.emit(i);
        }
    }
}
