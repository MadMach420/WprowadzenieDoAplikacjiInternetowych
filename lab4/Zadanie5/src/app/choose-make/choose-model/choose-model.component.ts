import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Car} from '../../car';
import {CarsService} from "../../cars.service";

@Component({
    selector: 'app-choose-model',
    templateUrl: './choose-model.component.html',
    styleUrls: ['./choose-model.component.css']
})
export class ChooseModelComponent implements OnChanges, OnInit {
    @Input() make: string = '';
    cars: Car[] = [];
    currentModels: string[] = [];
    showSelect: boolean = false;
    selectedModel: string = 'Focus';

    constructor(private carsService: CarsService) {
    }

    ngOnInit() {
        this.getCars();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.selectedModel = 'default';
        this.getCurrentModels(changes['make'].currentValue);
    }

    getCars(): void {
        this.cars = this.carsService.getCars();
    }

    getCurrentModels(make: string) {
        this.currentModels = [];
        this.cars.forEach(car => {
            if (car.make === make) {
                this.showSelect = true;
                this.currentModels.push(car.model);
            }
        })
    }

    selectModel(event: Event) {
        this.selectedModel = (event.target as HTMLSelectElement).value;
        console.log(this.selectedModel);
    }
}
