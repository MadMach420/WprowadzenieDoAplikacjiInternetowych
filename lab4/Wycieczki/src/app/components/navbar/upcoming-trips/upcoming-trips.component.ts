import {Component, OnInit} from '@angular/core';
import {PurchasedItem} from "../../../interfaces/PurchasedItem";
import {PurchaseHistoryService} from "../../../services/purchase-history.service";
import {Trip} from "../../../interfaces/Trip";

@Component({
  selector: 'app-upcoming-trips',
  templateUrl: './upcoming-trips.component.html',
  styleUrls: ['./upcoming-trips.component.css']
})
export class UpcomingTripsComponent implements OnInit {
    upcomingTrips: PurchasedItem[] = [];

    constructor(private purchaseHistoryService: PurchaseHistoryService) {
    }

    ngOnInit() {
        this.upcomingTrips = this.purchaseHistoryService.purchasedItems.filter( elem =>
            this.purchaseHistoryService.filterByStatus(elem.item, 'upcoming')
        );
    }

    getDaysUntilTrip(trip: Trip): string {
        let diff = Math.abs(new Date().getTime() - new Date(trip.startDate).getTime());
        return Math.ceil(diff / (1000 * 3600 * 24)).toString();
    }
}
