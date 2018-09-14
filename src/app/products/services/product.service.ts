import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  product: Product;
  products: Product[] = [
    {
      id: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: '2016-03-19',
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
      releaseDate: '2016-03-18',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4,
      imageUrl: 'http://via.placeholder.com/800x500',
    },
    {
        id: 3,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: '2016-05-21',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4,
        imageUrl: 'http://via.placeholder.com/800x500',
        tags: ['tools', 'hammer', 'construction']
    },
    {
        id: 4,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: '2016-05-15',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3,
        imageUrl: 'http://via.placeholder.com/800x500',
    },
    {
        id: 5,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: '2015-10-15',
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
    if (id === 0) {
      this.product = this.initializeProduct();
      return of(this.product).pipe(delay(1000));
    } else {
      this.product = this.products.find(item => item.id === id);
      return of(this.product).pipe(delay(1000));
    }
  }

  deleteProduct(product: Product): Observable<Product> {
    return of(product).pipe(delay(1000));
  }

  initializeProduct(): Product {
    return {
        id: 0,
        productName: 'New product',
        productCode: null,
        tags: [''],
        releaseDate: null,
        price: null,
        description: null,
        starRating: null,
        imageUrl: null
    };
  }

  updateProduct(product: Product): Observable<Product> {
    var updatedProduct = this.products.find(product => product.id === product.id);
    if (updatedProduct != null) {
      let updatedProjectIndex = this.products.indexOf(updatedProduct);
      var temp = Object.assign({}, updatedProduct, product);
      this.products[updatedProjectIndex] = temp;
   }
    return of(product).pipe(delay(1000));
  }

  createProduct(product: Product): Observable<Product> {
    console.log(product);
    product.id = this.products[this.products.length -1].id + 1;
    this.products.push(product);
    return of(product).pipe(delay(1000));
  }
}
