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

  constructor(
    private productService: ProductService) { }

  ngOnInit() {
    this.loadData();
  }


  loadData(): void {
    this.loading = true;
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        console.log(this.products);
        this.loading = false;
      }
    );
  }

}
