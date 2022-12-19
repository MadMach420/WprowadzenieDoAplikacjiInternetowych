import {Component, Input} from '@angular/core';
import {Post} from "../../Post";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
    @Input() post: Post | null = null;
}