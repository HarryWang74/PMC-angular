import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable()
export class ProductEditGuardService {

  constructor() { }

  /*
  canDeactivate(component: ProductEditComponent): boolean {
    if (component.productForm.dirty) {
        let productName = component.productForm.get('productName').value || 'New Product';
        return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
    return true;
  }
  */
}
