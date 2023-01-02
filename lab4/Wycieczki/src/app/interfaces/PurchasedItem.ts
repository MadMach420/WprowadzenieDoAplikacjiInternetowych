import {CartItem} from "./CartItem";

export interface PurchasedItem {
    item: CartItem;
    purchaseDate: string;
    reviewed?: boolean;
}
