import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('profile-card');
  name: string = 'Name';
  role: string = 'Full Stack Developer';
  email: string = 'test@test.com';
  skills: string[] = ['Angular', 'TypeScript', 'Node.js'];
  
  getSkillsCount(): number {
    return this.skills.length;
  }


  counter: number = 0;
  increment(): void { this.counter++; }
  decrement(): void { this.counter--; }
  reset(): void { this.counter = 0; }




  username: string = '';
}
