import type { ReactNode } from "react";

export interface NavItem {
  id: string;
  icon: string;
  text: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'other';
}

export interface Experience {
  lien: ReactNode;
  title: string;
  period: string;
  company: string;
  description: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
  highlights: string[];
}