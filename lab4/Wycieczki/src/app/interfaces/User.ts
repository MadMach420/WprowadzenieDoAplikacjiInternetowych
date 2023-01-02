import {PurchasedItem} from "./PurchasedItem";

export interface User {
    id: string;
    email: string;
    displayName: string;
    role: string;
    trips: PurchasedItem[];
}
