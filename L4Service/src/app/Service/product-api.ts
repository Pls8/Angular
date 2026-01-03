import { Injectable, inject, signal, computed } from '@angular/core';
import { Api } from './api';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  private api = inject(Api);
  products = signal<Product[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  //Working!
  // loadProducts(): void {
  //   this.loading.set(true);
  //   this.error.set(null);
  //   this.products.set([
  //   { id: 1, name: 'Test Laptop', price: 999, inStock: true },
  //   { id: 2, name: 'Test Phone', price: 499, inStock: false }
  // ]);
  // this.loading.set(false); //remove this line
  // //this commented cuz page won't load
  //   // this.api.get<Product[]>('products').subscribe({
  //   //   next: (data) => {
  //   //     this.products.set(data);
  //   //     this.loading.set(false);
  //   //   },
  //   //   error: (err) => {
  //   //     this.error.set(err.message);
  //   //     this.loading.set(false);
  //   //   }
  //   // });
  // }
  loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api.get<any[]>('posts').subscribe({
      next: (data) => {
        const mapped = data.slice(0, 10).map(item => ({
          id: item.id,
          name: "Product " + item.id,
          price: Math.floor(Math.random() * 1000),
          inStock: Math.random() > 0.5
        }));
        this.products.set(mapped);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('API Error:', err);
        this.error.set("Could not connect to the server.");
        this.loading.set(false);
      }
    });
  }



  addProduct(product: Omit<Product, 'id'>): void {
    this.loading.set(true);
    this.error.set(null);

    const tempId = Math.floor(Math.random() * 1000);
    const productWithId = { ...product, id: tempId };
    this.products.update(all => [productWithId, ...all]);
    
    this.api.post<Product>('products', product).subscribe({
      next: (data) => {
        this.products.update(products => [...products, data]);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }


  // deleteProduct(id: number): void {
  //   this.loading.set(true);
  //   this.error.set(null);
  //   this.api.delete<Product>(`products/${id}`).subscribe({
  //     next: (data) => {
  //       this.products.update(products => products.filter(p => p.id !== id));
  //       this.loading.set(false);
  //     },
  //     error: (err) => {
  //       this.error.set(err.message);
  //       this.loading.set(false);
  //     }
  //   });
  // }

  //"Optimistic UI"
  deleteProduct(id: number): void {
    this.products.update(items => items.filter(p => p.id !== id));

    this.api.delete(`posts/${id}`).subscribe({
      error: (err) => console.log("Fake delete failed")
    });
  }


  // toggleStock(id: number): void {
  //   const product = this.getProductById(id);
  //   if (!product) return;
  //   this.loading.set(true);
  //   this.error.set(null);
  //   const updatedProduct = { ...product, inStock: !product.inStock };
  //   this.api.put<Product>(`products/${id}`, updatedProduct).subscribe({
  //     next: (data) => {
  //       this.products.update(products =>
  //         products.map(p => p.id === id ? data : p)
  //       );
  //       this.loading.set(false);
  //     },
  //     error: (err) => {
  //       this.error.set(err.message);
  //       this.loading.set(false);
  //     }
  //   });
  // }


  //"Optimistic UI"
  toggleStock(id: number): void {
    const current = this.getProductById(id);
    if (!current) return;

    this.products.update(items =>
      items.map(p => p.id === id ? { ...p, inStock: !p.inStock } : p)
    );

    // Fake API call
    this.api.put(`posts/${id}`, { ...current, inStock: !current.inStock }).subscribe();
  }


  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  inStockCount = computed(() =>
    this.products().filter(p => p.inStock).length);
}
