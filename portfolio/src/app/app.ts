import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [ Navbar, Hero, About, Experience, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})

export class App {
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadResume() {
    alert('Resume download would start here!');
  }
}