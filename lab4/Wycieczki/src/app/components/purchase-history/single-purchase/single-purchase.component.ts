import {Component, Input, OnInit} from '@angular/core';
import {PurchasedItem} from "../../../interfaces/PurchasedItem";
import {PurchaseHistoryService} from "../../../services/purchase-history.service";

@Component({
  selector: 'app-single-purchase',
  templateUrl: './single-purchase.component.html',
  styleUrls: ['./single-purchase.component.css']
})
export class SinglePurchaseComponent implements OnInit {
    @Input() purchasedItem: PurchasedItem | null = null;
    status: string = '';

    constructor(public purchaseHistoryService: PurchaseHistoryService) {
    }

    ngOnInit() {
        if (this.purchasedItem) this.status = this.purchaseHistoryService.getTripStatus(this.purchasedItem.item);
    }
}
