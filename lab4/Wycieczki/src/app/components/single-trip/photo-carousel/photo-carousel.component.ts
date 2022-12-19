import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.css']
})
export class PhotoCarouselComponent implements OnInit {
    @Input() photos: string[] = [];
    currIndex: number = 0;
    source: string = '';

    ngOnInit(): void {
        if (this.photos.length == 0) return;
        this.source = this.photos[this.currIndex];
    }

    previousPhoto(): void {
        if (this.photos.length == 0) return;
        this.currIndex = ((this.currIndex - 1) + this.photos.length) % this.photos.length;
        this.source = this.photos[this.currIndex];
    }

    nextPhoto(): void {
        if (this.photos.length == 0) return;
        this.currIndex = (this.currIndex + 1) % this.photos.length;
        this.source = this.photos[this.currIndex];
    }
}
