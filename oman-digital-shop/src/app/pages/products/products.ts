import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [RouterLink, FormsModule, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  private route = inject(ActivatedRoute);

  products: Product[] = [];
  loading = true;

  productService = inject(ProductService);
  cartService = inject(CartService);

  searchTerm: string = '';

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe({
  //     next: (data) => { this.products = data; this.loading = false; },
  //     error: (err) => { console.error(err); this.loading = false; }
  //   });
  // }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadProductsByCategory(+params['id']);
      } else {
        this.loadAllProducts();
      }
    });
  }

  loadAllProducts(): void {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (data) => { this.products = data; this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  loadProductsByCategory(categoryId: number): void {
    this.loading = true;
    this.productService.getProductsByCategory(categoryId).subscribe({
      next: (data) => { this.products = data; this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  search(): void {
    if (!this.searchTerm.trim()) { this.loadAllProducts(); return; }
    this.loading = true;
    this.productService.searchProducts(this.searchTerm).subscribe({
      next: (data) => { this.products = data; this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to cart.`);
  }

  
}