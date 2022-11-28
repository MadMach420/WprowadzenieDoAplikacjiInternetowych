import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Data} from "../Data";
import {DataService} from "../data.service";

@Component({
  selector: 'app-object-container',
  templateUrl: './object-container.component.html',
  styleUrls: ['./object-container.component.css']
})
export class ObjectContainerComponent implements OnInit {
    @Output() objChosenEvent = new EventEmitter<Data>();
    data: Data[] = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.data = this.dataService.data;
    }

    objChoice(obj: Data) {
        this.objChosenEvent.emit(obj)
    }
}
