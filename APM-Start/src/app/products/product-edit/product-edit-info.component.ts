import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ResolveData } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product, ProductResolved } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(
      (data: ProductResolved) => {
        if (this.productForm) {
          this.productForm.reset();
        }
        this.product = data['resolvedData'].product;
        this.errorMessage = data['resolvedData'].error;
    });
  }
}
