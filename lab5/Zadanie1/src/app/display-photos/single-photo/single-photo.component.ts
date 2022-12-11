import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Photo} from "../../Photo";
import {PhotosService} from "../../photos.service";

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.css']
})
export class SinglePhotoComponent implements OnInit {
    photo: Photo | undefined;

    constructor(private activatedRoute: ActivatedRoute, private photosService: PhotosService, private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (this.photosService.photosObservable === undefined) return;
            this.photosService.photosObservable.subscribe(photos => {
                photos.forEach(photo => {
                    if (photo.id == id) {
                        this.photo = photo;
                    }
                });
                if (this.photo === undefined) {
                    this.router.navigate(['/photos'])
                }
            })
        })
    }
}
