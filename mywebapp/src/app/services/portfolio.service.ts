import { Injectable } from '@angular/core';
import { Experience, ContactInfo, SocialLink } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        title: 'Designer',
        company: 'Company name Inc.',
        years: '2020-2023',
        description: 'About.',
        responsibilities: [
          'Collaborated with product managers and engineers to define product strategy and roadmap'
        ]
      },
      // Add more experiences
    ];
  }

  getContactInfo(): ContactInfo {
    return {
      email: 'email@email.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    };
  }

  getSocialLinks(): SocialLink[] {
    return [
      { name: 'GitHub', url: 'https://github.com', icon: 'github' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' }
    ];
  }
}