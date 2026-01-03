import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductApi } from '../../Service/product-api';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detial',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detial.html',
  styleUrl: './product-detial.css',
})
export class ProductDetial {
  private route = inject(ActivatedRoute); // To get the ID from URL
  private productApi = inject(ProductApi); // To get data

  product = signal<Product | undefined>(undefined);
  loading = this.productApi.loading;

  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   if (id) {
  //     this.product.set(this.productApi.getProductById(id));
  //   }
  // }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Handle refresh: if products are empty, load them
    if (this.productApi.products().length === 0) {
      this.productApi.loadProducts();
    }

    // Small delay to ensure the signal is populated if loadProducts was just called
    setTimeout(() => {
      this.product.set(this.productApi.getProductById(id));
    }, 200);
  }




}
