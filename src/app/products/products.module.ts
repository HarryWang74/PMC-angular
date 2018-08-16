import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule, ProductsRoutingModule
  ],
  declarations: [ProductListComponent]
})
export class ProductsModule { }
