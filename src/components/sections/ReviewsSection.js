export function ReviewsSection() {
  return `
    <section class="reviews section-theme-light" id="reviews">
      <div class="container">
        <div class="section-head center">
          <h2 data-i18n="reviewsTitle">Client Testimonials</h2>
          <div class="underline"></div>
        </div>

        <div class="review-grid">
          <article class="review-card">
            <p class="stars">★★★★★</p>
            <p data-i18n="review1">“Incredible service! My grand piano sounds better than it has in years. The tuning was meticulous and handled with such care.”</p>
            <p class="author">Sarah M. <span data-i18n="reviewSource">Google Review</span></p>
          </article>
          <article class="review-card">
            <p class="stars">★★★★★</p>
            <p data-i18n="review2">“Very professional and punctual. Fixed a sticky key issue that had been bothering me for months. A true master of his craft.”</p>
            <p class="author">David L. <span data-i18n="reviewSource">Google Review</span></p>
          </article>
          <article class="review-card">
            <p class="stars">★★★★★</p>
            <p data-i18n="review3">“The deep cleaning made my upright look brand new on the inside. Highly recommended for anyone wanting top-tier maintenance.”</p>
            <p class="author">Elena R. <span data-i18n="reviewSource">Google Review</span></p>
          </article>
        </div>

        <a class="btn-primary" href="https://www.google.com/maps" target="_blank" rel="noopener" data-i18n="reviewsButton">See all Google reviews</a>
      </div>
    </section>
  `;
}
