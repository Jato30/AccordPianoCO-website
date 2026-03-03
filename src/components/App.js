import { Header } from './sections/Header.js';
import { HeroSection } from './sections/HeroSection.js';
import { AboutSection } from './sections/AboutSection.js';
import { ServicesSection } from './sections/ServicesSection.js';
import { ReviewsSection } from './sections/ReviewsSection.js';
import { ContactSection } from './sections/ContactSection.js';
import { Footer } from './sections/Footer.js';

export function App() {
  return `
    ${Header()}
    <main id="home">
      ${HeroSection()}
      ${AboutSection()}
      ${ServicesSection()}
      ${ReviewsSection()}
      ${ContactSection()}
    </main>
    ${Footer()}
  `;
}
