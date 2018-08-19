import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [
    CommonModule, ProductsRoutingModule
  ],
  declarations: [ProductListComponent],
  providers: [ProductService],
})
export class ProductsModule { }
