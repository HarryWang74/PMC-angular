import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProudctDetailGuardService } from './services/proudct-detail-guard.service';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductEditGuardService } from './services/product-edit-guard.service';
import { ProductFilterPipe } from './pipe/product-filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, ProductsRoutingModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductFilterPipe],
  providers: [ProductService, ProudctDetailGuardService, ProductEditGuardService],
})
export class ProductsModule { }
