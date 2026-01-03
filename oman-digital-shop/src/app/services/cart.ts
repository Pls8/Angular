import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Cart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart>(this.loadCart());
  cart$ = this.cartSubject.asObservable();
  addToCart(product: Product, quantity: number = 1): void {
    const cart = this.cartSubject.value;
    const existingItem = cart.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
    this.updateCart(cart);
  }
  removeFromCart(productId: number): void {
    const cart = this.cartSubject.value;
    cart.items = cart.items.filter(item => item.product.id !== productId);
    this.updateCart(cart);
  }
  updateQuantity(productId: number, quantity: number): void {
    const cart = this.cartSubject.value;
    const item = cart.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) { this.removeFromCart(productId); return; }
    }
    this.updateCart(cart);
  }
  clearCart(): void {
    const emptyCart: Cart = { items: [], totalItems: 0, totalPrice: 0 };
    localStorage.removeItem('cart');
    this.cartSubject.next(emptyCart);
  }
  private updateCart(cart: Cart): void {
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart);
  }
  private loadCart(): Cart {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : { items: [], totalItems: 0, totalPrice: 0 };
  }
}
