import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  //@Input() userName: string = 'Guest'; //receive from parent component???
  

  //signal input
  userName = input<string>('Guest');
}
