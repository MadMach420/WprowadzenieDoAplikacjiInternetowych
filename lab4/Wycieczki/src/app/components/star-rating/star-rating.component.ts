import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
    @Input() rating: number = 0;
    @Input() disabled: boolean = false;
    hoverRating: number = 0;
    stars = [1, 2, 3, 4, 5];
    @Output() ratingChosenEvent: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {
        this.hoverRating = this.rating;
    }

    ngOnChanges() {
        this.hoverRating = this.rating;
    }

    mouseEnter(i: number) {
        if (!this.disabled) {
            this.hoverRating = i;
        }
    }

    mouseLeave() {
        if (!this.disabled) {
            this.hoverRating = this.rating;
        }
    }

    chooseRating (i: number) {
        if (!this.disabled) {
            this.rating = i;
            // this.disabled = true;
            this.ratingChosenEvent.emit(i);
        }
    }
}
