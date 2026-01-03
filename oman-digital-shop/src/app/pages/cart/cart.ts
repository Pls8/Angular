import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { CartService } from '../../services/cart';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CurrencyPipe, AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);
  authService = inject(AuthService);

  updateQuantity(productId: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    const quantity = +target.value;
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    if(confirm('Are you sure you want to clear cart?')){
      this.cartService.clearCart();
    }
  }

  
}
