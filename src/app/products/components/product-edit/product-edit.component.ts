import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  loading: boolean;
  productForm: FormGroup;
  product: Product;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: [''],
      tags: this.fb.array([]),
      description: ''
    });

    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.loadDate();

  }

  loadDate() {
    this.loading = true;
    this.productService.getProduct(this.id).subscribe(
      product => {
        this.product = product;
        this.loading = false;
        console.log(this.product);
      }
    );
  }
}
