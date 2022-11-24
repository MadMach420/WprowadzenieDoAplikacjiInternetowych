import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Car} from "../../../car";
import {CarsService} from "../../../cars.service";

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.css']
})
export class ChooseColorComponent implements OnInit, OnChanges{
    @Input() make: string = '';
    @Input() model: string = '';
    cars: Car[] = [];
    colors: string[] = [];
    selectedColor: string = '';

    constructor(private carsService: CarsService) {
    }

    ngOnInit() {
        this.getCars();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.selectedColor = '';
        this.colors = this.getColors();
    }

    getCars(): void {
        this.cars = this.carsService.getCars();
    }

    getColors(): string[] {
        let colorArray: string[] = [];

        this.cars.forEach(car => {
            if (car.make === this.make && car.model === this.model) {
                colorArray = car.color;
            }
        })

        return colorArray;
    }

    selectColor(event: MouseEvent) {
        this.selectedColor = (event.target as HTMLUListElement).id;
    }
}
