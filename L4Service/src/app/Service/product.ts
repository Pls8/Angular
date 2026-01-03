import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private productsSignal = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Phone', price: 699, inStock: true },
    { id: 3, name: 'Tablet', price: 499, inStock: false }
  ]);


  readonly products = this.productsSignal.asReadonly();

  readonly inStockCount = computed(() =>
    this.productsSignal().filter(p => p.inStock).length
  );

  addProduct(product: Omit<Product, 'id'>): void {
    const newId = Math.max(...this.productsSignal().map(p => p.id), 0) + 1;
    this.productsSignal.update(products => [
      ...products,
      { ...product, id: newId }
    ]);
  }


  getProductById(id: number): Product | undefined {
    return this.productsSignal().find(p => p.id === id);
  }


  toggleStock(id: number): void {
    this.productsSignal.update(products =>
      products.map(p =>
        p.id === id ? { ...p, inStock: !p.inStock } : p
      )
    );
  }
}