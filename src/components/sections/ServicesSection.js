export function ServicesSection() {
  return `
    <section class="services section-theme-light" id="services">
      <div class="container">
        <div class="section-head center">
          <p class="spark">✧</p>
          <h2 data-i18n="servicesTitle">Our Services</h2>
          <p class="section-copy" data-i18n="servicesIntro">Professional care tailored to the unique mechanical and acoustic needs of your instrument.</p>
        </div>

        <div class="service-cards">
          <article class="card">
            <div class="icon">♫</div>
            <h3 data-i18n="serviceTuningTitle">Piano Tuning</h3>
            <p data-i18n="serviceTuningBody">Precise aural and electronic tuning to bring your piano back to concert pitch. Essential for ear training and musical enjoyment.</p>
          </article>
          <article class="card">
            <div class="icon">⚒</div>
            <h3 data-i18n="serviceRepairTitle">Piano Repair</h3>
            <p data-i18n="serviceRepairBody">Fixing sticky keys, broken strings, or unresponsive pedals. We use professional-grade materials to ensure long-lasting mechanical reliability.</p>
          </article>
          <article class="card">
            <div class="icon">✧</div>
            <h3 data-i18n="serviceCleaningTitle">Piano Cleaning</h3>
            <p data-i18n="serviceCleaningBody">Deep removal of dust and debris from the soundboard, keys, and action. Improves hygiene and prevents premature wear of internal parts.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}
