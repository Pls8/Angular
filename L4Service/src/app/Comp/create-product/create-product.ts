import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  imports: [],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {
  private router = inject(Router);

  onSubmit(): void {
    const porductId = 1;
    this.router.navigate(['/products']);

    this.router.navigate(['/products', porductId]);

    this.router.navigate(['/products'], {
      queryParams: { sort: 'price', order: 'asc' }
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  searchPrice(): void {
    this.router.navigate(['/products'], {
      queryParams: { sort: 'price', order: 'asc' }
    });
  }
}
