import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from './Comp/greeting/greeting';
import { Counter } from './Comp/counter/counter';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Greeting, Counter, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-L3');
  currentUser: string = 'Someone';

  counterValue: number = 0;

  onCountChanged(newCount: number) {
    this.counterValue = newCount;
  }

  items = signal<string[]>([]);
  userProfile = signal({
    name: 'NAME',
    age: 69,
    email: 'test@example.com',
    active: true
  });

  addItem(item: string) {
    if (item.trim()) {
      this.items.update(items => [...items, item]);
    }
  }

  removeItem(index: number) {
    this.items.update(items => items.filter((_, i) => i !== index));
  }




  price = signal(100);
  quantity = signal(2);
  subtotal = computed(() => this.price() * this.quantity());
  updatePrice(value: string) {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
      this.price.set(num);
    }
  }
  updateQuantity(value: string) {
    const num = parseInt(value);
    if (!isNaN(num) && num >= 0) {
      this.quantity.set(num);
    }
  }

  theme = signal('dark');
  constructor() {
    effect(() => {
      localStorage.setItem('theme', this.theme());
    });

  }
}
