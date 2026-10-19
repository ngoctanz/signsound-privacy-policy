const languageButtons = document.querySelectorAll('[data-language]');
const localizedContent = document.querySelectorAll('[data-copy]');

function setLanguage(language) {
  document.documentElement.lang = language;
  document.title = language === 'vi'
    ? 'Chính sách quyền riêng tư | SignSound'
    : 'Privacy Policy | SignSound';

  localizedContent.forEach((element) => {
    element.hidden = element.dataset.copy !== language;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

const browserLanguage = navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en';
setLanguage(browserLanguage);
