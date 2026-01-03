import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductList } from './Comp/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductList, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('L4Service');
}

//NOTE
// src/app/
// ├── models/
// │   └── product.model.ts          ← Interface (Blueprint)
// ├── Service/
// │   ├── product.ts                ← Service (Data Manager)
// │   └── product.spec.ts
// ├── components/
// │   └── product-list/
// │       ├── product-list.ts       ← Component (Display)
// │       ├── product-list.html
// │       └── product-list.css
// ├── app.ts
// └── app.html