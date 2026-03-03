export function Header() {
  return `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="logo" href="#home" aria-label="Accord Piano CO Home">
          <span class="logo-mark">♪</span>
          <span class="logo-text">Accord Piano CO</span>
        </a>

        <nav aria-label="Main navigation">
          <ul class="nav-links">
            <li><a href="#about" data-i18n="navAbout">About</a></li>
            <li><a href="#services" data-i18n="navServices">Services</a></li>
            <li><a href="#reviews" data-i18n="navReviews">Reviews</a></li>
            <li><a href="#contact" data-i18n="navContact">Contact</a></li>
          </ul>
        </nav>

        <div class="language-picker" aria-label="Language picker">
          <label for="language" data-i18n="languageLabel">Language</label>
          <select id="language" name="language">
            <option value="en-US">English (US)</option>
            <option value="fr-CA">Français (CA)</option>
            <option value="es-LA">Español (LA)</option>
            <option value="pt-BR">Português (BR)</option>
            <option value="de-DE">Deutsch (DE)</option>
            <option value="it-IT">Italiano (IT)</option>
          </select>
        </div>
      </div>
    </header>
  `;
}
