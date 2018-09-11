import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NumberValidators } from '../../validators/number.validator';
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

  get tags(): FormArray {
    return <FormArray>this.productForm.get('tags');
  }

  constructor( 
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(10)]],
      imageUrl: '',
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
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
        this.productForm.patchValue({
          productName: this.product.productName,
          productCode: this.product.productCode,
          starRating: this.product.starRating,
          description: this.product.description,
          imageUrl: this.product.imageUrl
        });
        this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    );
  }
}
