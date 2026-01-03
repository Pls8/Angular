import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard, Product } from './Comp/product-card/product-card';
import { CartSummary } from './Comp/cart-summary/cart-summary';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard, CartSummary],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Product-Catalog');


  products = signal<Product[]>([
    { id: 1, name: 'iPhone 15', price: 999, image: 'imgs/iphone.png' },
    { id: 2, name: 'MacBook Pro', price: 1999, image: 'imgs/macbook.png' },
    { id: 3, name: 'AirPods Pro', price: 249, image: 'imgs/airpods.png' }
  ]);
  
  cart = signal<Product[]>([]);
  addToCart(product: Product): void {
    this.cart.update(items => [...items, product]);
  }
  clearCart(): void {
    this.cart.set([]);
  }



}
