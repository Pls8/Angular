// src/app/pages/home/home.component.ts
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent  } from '../../Componenets/navbar/navbar';
import { HeroComponent  } from '../../Components/hero/hero';
import { ExperienceComponent } from '../../Components/experience/experience';
import { FooterComponent  } from '../../Componetes/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ExperienceComponent, FooterComponent ],
  templateUrl: './home.html',
  styleUrls : ['./home.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeScrollAnimations();
      this.initializeButtonEffects();
    }
  }

  private initializeScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  private initializeButtonEffects(): void {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('hover');
      });
      
      button.addEventListener('mouseleave', () => {
        button.classList.remove('hover');
      });
    });
  }

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}