const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeCheckboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

if (localStorage.getItem('theme') === Theme.DARK) {
  themeCheckboxEl.setAttribute('checked', true);
  bodyEl.classList.add(localStorage.getItem('theme'));
}

themeCheckboxEl.addEventListener('change', changeThemeCheckbox);

function changeThemeCheckbox() {
  if (bodyEl.classList.contains(Theme.DARK)) {
    bodyEl.classList.remove(localStorage.getItem('theme'));
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    bodyEl.classList.remove(localStorage.getItem('theme'));
    localStorage.setItem('theme', Theme.DARK);
  }
  bodyEl.classList.add(localStorage.getItem('theme'));
}
