import { App } from './components/App.js';
import { initializeI18n } from './utils/i18n.js';

const root = document.querySelector('#root');
root.innerHTML = App();

initializeI18n();

document.querySelector('#year').textContent = new Date().getFullYear();

const quoteForm = document.querySelector('#quote-form');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim() || 'Not provided';
    const message = (formData.get('message') || '').toString().trim() || 'No message provided.';

    const subject = 'ACCORD PIANO CO: quote request from website';
    const body = [
      'New quote request from website',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      'Message:',
      message,
    ].join('\n');

    window.location.href = `mailto:DanielM.B.Barbosa@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
