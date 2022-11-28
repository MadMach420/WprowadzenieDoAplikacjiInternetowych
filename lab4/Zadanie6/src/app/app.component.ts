import {Component} from '@angular/core';
import {Data} from "./Data";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Zadanie6';
    objToDisplay: Data | null = null;

    setObjToDisplay(obj: Data) {
        this.objToDisplay = obj;
    }
}
