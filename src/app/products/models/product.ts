export class Product {
    id: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    tags?: Array<string>;
    deleting?: boolean;
}
