import {Component, Input} from '@angular/core';
import {Data} from "../Data";

@Component({
  selector: 'app-display-obj',
  templateUrl: './display-obj.component.html',
  styleUrls: ['./display-obj.component.css']
})
export class DisplayObjComponent {
    @Input() objToDisplay: Data | null = null;
}
