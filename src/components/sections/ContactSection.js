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
            <a href="mailto:hello@accordpianoco.com">hello@accordpianoco.com</a>
            <a href="tel:+10000000000">+1 (000) 000-0000</a>
            <a href="https://wa.me/10000000000" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://instagram.com/accordpianoco" target="_blank" rel="noopener">Instagram</a>
            <a href="https://facebook.com/accordpianoco" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>

        <form class="quote-form" action="#" method="post">
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
