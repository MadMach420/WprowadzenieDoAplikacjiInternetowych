import {Component} from '@angular/core';
import {PurchaseHistoryService} from "../../services/purchase-history.service";

@Component({
    selector: 'app-purchase-history',
    templateUrl: './purchase-history.component.html',
    styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent {
    status: string = 'all';

    constructor(public purchaseHistoryService: PurchaseHistoryService) {
    }
}
