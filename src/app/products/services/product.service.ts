import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  product: Product;
  products = [
    {
      id: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3,
      imageUrl: 'http://via.placeholder.com/800x500',
      tags: ['rake', 'leaf', 'yard', 'home']
    },
    {
      id: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4,
      imageUrl: 'http://via.placeholder.com/800x500',
    },
    {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2016',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4,
        imageUrl: 'http://via.placeholder.com/800x500',
        tags: ['tools', 'hammer', 'construction']
    },
    {
        id: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2016',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3,
        imageUrl: 'http://via.placeholder.com/800x500',
    },
    {
        id: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2015',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4,
        imageUrl: 'http://via.placeholder.com/800x500',
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(2000));
  }

  getProduct(id: number): Observable<Product> {
    this.product = this.products.find(item => item.id === id);
    return of(this.product).pipe(delay(1000));
  }

  deleteProduct(product: Product): Observable<Product> {
    return of(product).pipe(delay(1000));
  }
}
