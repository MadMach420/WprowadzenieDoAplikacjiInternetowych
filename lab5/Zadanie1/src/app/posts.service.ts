import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./Post";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    url: string = 'https://jsonplaceholder.typicode.com/posts';
    req: Observable<Post> | undefined;

    constructor(private http: HttpClient) {
        this.getPosts();
    }

    getPosts(): void {
        this.req = this.http.get<Post>(this.url);
    }

    addPost(post: Post): void {
        this.http.put(this.url, post);
    }
}
