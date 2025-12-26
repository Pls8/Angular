export interface Experience {
  id: number;
  title: string;
  company: string;
  years: string;
  description: string;
  responsibilities: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}