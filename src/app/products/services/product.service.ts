import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<any> {
    const customers = [
      {id: 1, name: 'name1'},
      {id: 2, name: 'name2'},
    ];

    return of(customers).pipe(delay(2000));
  }
}
