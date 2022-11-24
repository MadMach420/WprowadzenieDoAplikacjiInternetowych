import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../../car";
import {CarsService} from "../../../../cars.service";

@Component({
  selector: 'app-display-model',
  templateUrl: './display-model.component.html',
  styleUrls: ['./display-model.component.css']
})
export class DisplayModelComponent implements OnInit {
    @Input() make: string = '';
    @Input() model: string = '';
    @Input() color: string = '';
    modelChosen: boolean = false;
    cars: Car[] = [];

    constructor(private carsService: CarsService) {
    }

    ngOnInit() {
        this.getCars();
    }

    getCars() {
        this.cars = this.carsService.getCars();
    }

    getModelData(make: string, model: string): string {
        let carData: string = "";
        if (this.color !== '') {
            this.cars.forEach(car => {
                if (car.make === make && car.model === model) {
                    carData = `${car.make} ${car.model}. Color: ${this.color}. Equipment details: ${car.description}`
                }
            });
        }
        return carData;
    }
}
