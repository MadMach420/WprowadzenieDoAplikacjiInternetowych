import {Component, Input, OnInit} from '@angular/core';
import {CarsService} from "../../../cars.service";
import {Car} from "../../../car";

@Component({
    selector: 'app-display-model',
    templateUrl: './display-model.component.html',
    styleUrls: ['./display-model.component.css']
})
export class DisplayModelComponent implements OnInit {
    @Input() make: string = '';
    @Input() model: string = '';
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
        this.cars.forEach(car => {
            if (car.make === make && car.model === model) {
                carData = `${car.make} ${car.model}, color ${car.color}. ${car.description}`
            }
        });
        return carData;
    }
}
