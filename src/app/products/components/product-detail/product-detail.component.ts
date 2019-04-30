import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;
  loading: boolean;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.loadDate();
  }

  loadDate() {
    this.loading = true;
    this.productService.getProduct(this.id).subscribe(
      (product:Product) => {
        this.product = product;
        this.loading = false;
      },
      error => {
        this.error = error
      }
    );
  }

}
