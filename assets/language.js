const supportedLanguages = ['en', 'ro', 'hu', 'it', 'fr', 'de'];
const languageButtons = document.querySelectorAll('[data-select-language]');
const languageSections = document.querySelectorAll('[data-language]');
const languageLinks = document.querySelectorAll('[data-language-link]');

function normalizeLanguage(value) {
  const language = String(value ?? '').toLowerCase().split('-')[0];
  return supportedLanguages.includes(language) ? language : 'en';
}

function setLanguage(language, updateAddress = true) {
  const normalizedLanguage = normalizeLanguage(language);

  languageSections.forEach((section) => {
    section.hidden = section.dataset.language !== normalizedLanguage;
  });

  languageButtons.forEach((button) => {
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.selectLanguage === normalizedLanguage),
    );
  });

  languageLinks.forEach((link) => {
    const target = new URL(link.getAttribute('href'), window.location.href);
    target.searchParams.set('lang', normalizedLanguage);
    link.setAttribute('href', target.pathname + target.search + target.hash);
  });

  document.documentElement.lang = normalizedLanguage;
  try {
    window.localStorage.setItem('mypets-policy-language', normalizedLanguage);
  } catch {
    // Language selection still works when browser storage is unavailable.
  }

  if (updateAddress) {
    const address = new URL(window.location.href);
    address.searchParams.set('lang', normalizedLanguage);
    window.history.replaceState({}, '', address);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.selectLanguage);
  });
});

const requestedLanguage = new URL(window.location.href).searchParams.get('lang');
let storedLanguage = '';
try {
  storedLanguage = window.localStorage.getItem('mypets-policy-language') ?? '';
} catch {
  // Private browsing or hardened settings may block local storage.
}
setLanguage(requestedLanguage || storedLanguage || navigator.language, false);
