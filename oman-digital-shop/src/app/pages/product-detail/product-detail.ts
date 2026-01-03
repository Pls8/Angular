import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CurrencyPipe, FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {

  private route = inject(ActivatedRoute);

  product: Product | null = null;
  loading = true;
  quantity = 1;

  productService = inject(ProductService);
  cartService = inject(CartService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: number): void {
    this.loading = true;
    this.productService.getProductById(id).subscribe({
      next: (data) => { this.product = data; this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  addToCart() {
    if (this.product && this.quantity > 0) {
      //const productToAdd = { ...this.product, quantity: this.quantity };
      //this.cartService.addToCart(productToAdd);
      this.cartService.addToCart(this.product, this.quantity);
      alert(`${this.product.name} has been added to cart.`);
    }
  }

}