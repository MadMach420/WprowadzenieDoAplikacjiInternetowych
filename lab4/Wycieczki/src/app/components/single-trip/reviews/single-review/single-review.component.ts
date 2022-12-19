import {Component, Input} from '@angular/core';
import {Review} from "../../../../interfaces/Review";

@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.css']
})
export class SingleReviewComponent {
    @Input() review: Review | null = null;
}
