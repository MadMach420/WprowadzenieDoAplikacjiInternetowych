import {Injectable} from '@angular/core';
import { Data } from './Data';
import dataFromFile from "./data.json";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: Data[] = [];

    constructor() {
        this.data = this.getData();
    }

    getData(): Data[] {
        return dataFromFile;
    }
}
