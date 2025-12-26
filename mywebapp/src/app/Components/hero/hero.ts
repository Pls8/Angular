import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent  {
  title = 'Software Engineer';
  subtitle = 'Concept';
  imageUrl = 'assets/imgs/img1.jpg';
}
