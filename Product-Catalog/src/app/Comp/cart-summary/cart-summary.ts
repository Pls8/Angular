import { Component, input, output, computed } from '@angular/core';
import { Product } from '../product-card/product-card';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  standalone: true,
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {


  cartItems = input<Product[]>([]);

  clearCart = output<void>();

  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );
  onClear(): void {
    this.clearCart.emit();
  }
}
