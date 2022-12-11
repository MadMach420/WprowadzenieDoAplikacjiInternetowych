import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./Post";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    url: string = 'https://jsonplaceholder.typicode.com/posts';
    postsObservable: Observable<Post[]> | null = null;

    constructor(private http: HttpClient) {
        this.getPosts();
    }

    getPosts(): void {
        this.postsObservable = this.http.get<Post[]>(this.url);
    }

    addPost(post: Post): void {
        this.http.post<Post>(this.url, post).subscribe(newPost => console.log(newPost));
    }
}
