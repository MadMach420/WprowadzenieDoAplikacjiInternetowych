import { Component } from '@angular/core';
import {PhotosService} from "../photos.service";

@Component({
  selector: 'app-display-photos',
  templateUrl: './display-photos.component.html',
  styleUrls: ['./display-photos.component.css']
})
export class DisplayPhotosComponent {

    constructor(public photosService: PhotosService) {
    }
}
