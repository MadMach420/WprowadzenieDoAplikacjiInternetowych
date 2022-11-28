import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Data} from "../../Data";

@Component({
  selector: 'app-object-card',
  templateUrl: './object-card.component.html',
  styleUrls: ['./object-card.component.css']
})
export class ObjectCardComponent {
    @Input() obj: Data | null = null;
    @Output() objChosenEvent = new EventEmitter<null>;

    fireEvent() {
        this.objChosenEvent.emit();
    }
}
