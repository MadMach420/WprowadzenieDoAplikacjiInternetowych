import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Photo} from "./Photo";

@Injectable({
    providedIn: 'root'
})
export class PhotosService {
    url: string = 'https://jsonplaceholder.typicode.com/photos';
    photosObservable: Observable<Photo[]> | undefined;

    constructor(private http: HttpClient) {
        this.getPhotos();
    }

    getPhotos(): void {
        this.photosObservable = this.http.get<Photo[]>(this.url);
    }
}
