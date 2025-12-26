import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  years: string;
  description: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
})
// export class Experience {
// }

export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Designer',
      company: 'Company name Inc.',
      years: '2020-2023',
      description: 'About.',
      responsibilities: [
        'Collaborated with product managers and engineers to define product strategy and roadmap'
      ]
    },
    {
      title: 'Senior UX/UI Designer',
      company: 'Company name Co.',
      years: '2018-2020',
      description: 'About.',
      responsibilities: [
        'Created wireframes, prototypes, and high-fidelity mockups for various client projects'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'Company name',
      years: '2016-2018',
      description: 'About.',
      responsibilities: [
        'Created visual assets and icons for digital products'
      ]
    }
  ];
}