import {Component} from '@angular/core';
import {SwitchDisplayService} from "./switch-display.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Wycieczki';

    constructor(public switchDisplayService: SwitchDisplayService) {
    }
}
