import {Injectable} from '@angular/core';
import cars from "./cars.json";
import {Car} from "./car";

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor() { }

    getCars(): Car[] {
        return cars;
    }
}
