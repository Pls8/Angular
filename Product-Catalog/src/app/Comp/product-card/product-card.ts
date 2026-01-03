import { Component, input, output } from '@angular/core';


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}


@Component({
  selector: 'app-product-card',
  imports: [],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  product = input.required<Product>();

  addToCart = output<Product>();

  onAddClick(): void {
    this.addToCart.emit(this.product());
  }

}
