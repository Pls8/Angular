import { Component, input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})



export class Counter {
  count: number = 0;
  @Output() countChanged = new EventEmitter<number>();
  increment(): void {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement(): void {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
