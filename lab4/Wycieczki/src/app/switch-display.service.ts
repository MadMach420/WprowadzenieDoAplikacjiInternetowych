import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SwitchDisplayService {
    onDisplay: string = 'trips';

    constructor() {
    }
}
