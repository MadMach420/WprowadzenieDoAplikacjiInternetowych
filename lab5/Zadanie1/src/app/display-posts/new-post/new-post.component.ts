import { Component } from '@angular/core';
import {PostsService} from "../../posts.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
    title: FormControl = new FormControl('', Validators.required);
    body: FormControl = new FormControl('', Validators.required);

    constructor(public postsService: PostsService) {
    }

    submitPost(event: Event) {
        event.preventDefault();
        if (this.title.valid && this.body.valid) {
            this.postsService.addPost({userId: 11, body: this.body.getRawValue(), title: this.title.getRawValue()});
            this.title.setValue('');
            this.body.setValue('');
        }
    }
}
