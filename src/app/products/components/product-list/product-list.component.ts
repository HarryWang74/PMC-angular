import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService) { }

  ngOnInit() {
    this.loadData();
  }


  loadData(): void {
    this.productService.getProducts().subscribe( // observable version
      products => {
        console.log(products);
      }
    );
  }

}
