export interface Trip {
    id: string;
    name: string;
    country: string;
    startDate: string;
    endDate: string;
    price: number;
    seats: number;
    description: string;
    thumbnailURL: string;
    photosURLs: string[];
    availableSeats: number;
    starRating: number;
    numberOfReviews: number;
}
