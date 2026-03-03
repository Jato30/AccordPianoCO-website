export function ContactSection() {
  return `
    <section class="contact section-theme-dark" id="contact">
      <div class="theme-overlay"></div>
      <div class="container contact-wrap">
        <div>
          <p class="eyebrow" data-i18n="contactEyebrow">Get in touch</p>
          <h2 data-i18n="contactTitle">Contact for a quote</h2>
          <p class="section-copy" data-i18n="contactBody">Tell us your piano model, location, and service needed. We’ll get back to you with a personalized quote.</p>

          <div class="socials">
            <a href="mailto:info@accordpianoco.com">info@accordpianoco.com</a>
            <a href="tel:+14385283786">+1 (438) 528 3786</a>

            <a class="social-link" href="https://wa.me/14385283786?text=" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 11.8a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.2-4.8A8.5 8.5 0 1 1 20.5 11.8Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <path d="M9.1 8.8c.2-.4.4-.4.7-.4h.6c.2 0 .5 0 .7.5.2.5.8 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.3.3-.5.5-.1.1-.2.3-.1.5.1.2.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.4.2.1.4.1.6-.1.2-.2.7-.8.9-1 .2-.3.4-.2.6-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3 0 .1 0 .8-.3 1.2-.3.4-1.4.9-1.9.9s-1.1.1-3.5-.9c-2.9-1.2-4.7-4.1-4.8-4.3-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1.1-2.5Z" fill="currentColor"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            <a class="social-link" href="https://www.instagram.com/accordpianoco/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a class="social-link" href="https://www.facebook.com/accordpianoco/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.2 20.5v-7h2.3l.4-2.7h-2.7V9.1c0-.8.2-1.3 1.4-1.3H17V5.3c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v2.3H9.7v2.7h2.2v7h2.3Z" fill="currentColor"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <form class="quote-form" id="quote-form" action="#" method="post">
          <input type="text" name="name" data-i18n-placeholder="formName" placeholder="Name" required />
          <input type="email" name="email" data-i18n-placeholder="formEmail" placeholder="Email" required />
          <input type="tel" name="phone" data-i18n-placeholder="formPhone" placeholder="Phone Number (optional)" />
          <textarea name="message" rows="5" data-i18n-placeholder="formMessage" placeholder="Message"></textarea>
          <button type="submit" class="btn-outline" data-i18n="formSubmit">Send Request</button>
        </form>
      </div>
    </section>
  `;
}
