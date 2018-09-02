import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProudctDetailGuardService } from './services/proudct-detail-guard.service';

import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductEditGuardService } from './services/product-edit-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',    component: ProductListComponent },
  {
    path: 'product/:id',
    canActivate: [ ProudctDetailGuardService ],
    component: ProductDetailComponent
  },
  {
    path: 'productEdit/:id',
    // canDeactivate: [ ProductEditGuardService ],
    component: ProductEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
