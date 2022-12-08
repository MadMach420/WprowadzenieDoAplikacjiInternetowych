import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Photo} from "./Photo";

@Injectable({
    providedIn: 'root'
})
export class PhotosService {
    url: string = 'https://jsonplaceholder.typicode.com/photos';
    req: Observable<Photo> | undefined;

    constructor(private http: HttpClient) {
        this.getPhotos();
    }

    getPhotos(): void {
        this.req = this.http.get<Photo>(this.url);
    }
}
