import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from "../car";

@Component({
    selector: 'app-choose-make',
    templateUrl: './choose-make.component.html',
    styleUrls: ['./choose-make.component.css']
})
export class ChooseMakeComponent implements OnInit {
    cars: Car[] = [];
    carMakes = new Set<string>();
    selectedMake: string = 'default';

    constructor (private carsService: CarsService) {}

    ngOnInit(): void {
        this.getCars();
        this.getCarMakes();
    }

    getCars(): void {
        this.cars = this.carsService.getCars();
    }

    getCarMakes() {
        this.cars.forEach(car => {
            this.carMakes.add(car.make);
        })
    }

    selectMake(event: Event) {
        this.selectedMake = (event.target as HTMLSelectElement).value;
    }
}
