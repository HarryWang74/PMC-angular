import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  loading: boolean;

  products: Product[];
  error: any;
  listFilter: string;
  
  constructor(
    private productService: ProductService) { }

  ngOnInit() {
    this.loadData();
  }


  loadData(): void {
    this.loading = true;
    this.productService.getProducts().subscribe(
      (products:Product[]) => {
        this.products = products;
        this.loading = false;
      },
      error => {
        this.error = error
      }
    );
  }

  deleteProduct(product: Product): void {
    product.deleting = true;
    this.productService.deleteProduct(product).subscribe(
      deletedProduct => {
        let index = this.products.indexOf(deletedProduct);
        if ( index !== -1) {
          this.products.splice(index, 1);
        }
      }
    );
  }
}
