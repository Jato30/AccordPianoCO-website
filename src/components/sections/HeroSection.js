export function HeroSection() {
  return `
    <section class="hero section-theme-dark">
      <div class="theme-overlay"></div>
      <div class="container hero-content">
        <p class="eyebrow" data-i18n="heroEyebrow">Piano services based in Montreal</p>
        <h1 class="hero-title">
          <span>Accord</span>
          <span class="accent">Piano</span>
          <span>CO.</span>
        </h1>
        <p class="hero-sub" data-i18n="tagline">Restore your piano's true voice.</p>
        <ul class="hero-list">
          <li data-i18n="bullet1">Standard Tuning</li>
          <li data-i18n="bullet2">Action Regulation & Repairs</li>
          <li data-i18n="bullet3">Deep Cleaning</li>
        </ul>
        <a class="btn-outline" href="#contact" data-i18n="ctaQuote">Get a quote</a>
      </div>
    </section>
  `;
}
