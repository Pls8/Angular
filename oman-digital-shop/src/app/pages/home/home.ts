import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product';
import { CategoryService } from '../../services/category';
import { CartService } from '../../services/cart';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  loading = true;

  productService = inject(ProductService);
  categoryService = inject(CategoryService);
  cartService = inject(CartService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => { this.products = data.slice(0, 8); this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
    this.categoryService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error(err)
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to cart.`);
  }
}