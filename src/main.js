import { App } from './components/App.js';
import { initializeI18n } from './utils/i18n.js';

const root = document.querySelector('#root');
root.innerHTML = App();

initializeI18n();

document.querySelector('#year').textContent = new Date().getFullYear();
