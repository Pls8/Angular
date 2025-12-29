import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  standalone: true
})
export class Hero {
scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  // you can use object
  name: string = "TEST"
  heroImage = 'assets/imgs/img1_000000.jpg'

}
