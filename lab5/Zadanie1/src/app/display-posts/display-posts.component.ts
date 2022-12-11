import {Component} from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../Post";

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent {

    constructor(public postsService: PostsService) {
    }
}
