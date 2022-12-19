import {Pipe, PipeTransform} from '@angular/core';
import {PurchaseHistoryService} from "../services/purchase-history.service";
import {PurchasedItem} from "../interfaces/PurchasedItem";

@Pipe({
    name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {
    constructor(private purchaseHistoryService: PurchaseHistoryService) {
    }

    transform(value: PurchasedItem[], status: string = 'all'): PurchasedItem[] {
        return value.filter(elem => this.purchaseHistoryService.filterByStatus(elem.item , status));
    }
}
