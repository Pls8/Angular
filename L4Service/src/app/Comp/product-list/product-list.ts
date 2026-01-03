import { Component, inject, OnInit} from '@angular/core';
import { ProductService } from '../../Service/product';
import { ProductApi } from '../../Service/product-api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  //productService = inject(ProductService);
  //OLD WAY WITHOUT API SERVICE
  // products = this.productService.products;
  // inStockCount = this.productService.inStockCount;
  // addProduct() {
  //   this.productService.addProduct({
  //     name: 'Mouse',
  //     price: 9,
  //     inStock: true
  //   });
  // }
  // toggleStock(id: number) {
  //   this.productService.toggleStock(id);
  // }

  //NEW WAY WITH API SERVICE
  productApi = inject(ProductApi);
  ngOnInit(): void {
    this.productApi.loadProducts();
  }

  products = this.productApi.products;
  loading = this.productApi.loading;
  error = this.productApi.error;
  inStockCount = this.productApi.inStockCount;

  addProduct() {
    this.productApi.addProduct({
      name: 'Mouse',
      price: 29,
      inStock: true
    });
  }

  deleteProduct(id: number) {
    this.productApi.deleteProduct(id);
  }

  toggleStock(id: number) {
    this.productApi.toggleStock(id);
  }
  
}
