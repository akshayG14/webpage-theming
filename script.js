const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Event Listener for the theme toggle switch
toggleSwitch.addEventListener('change', switchTheme);

// Theme Switch function
function switchTheme(event) {
  (event.target.checked) ? targetTheme('dark') : targetTheme('light');
}

function targetTheme(theme) {
  const navColor = (theme === 'light') ? '255 255 255' : '0 0 0';
  const textBoxColor = theme === 'light' ? '0 0 0' : '255 255 255';
  const capitalizedText = theme[0].toUpperCase() + theme.slice(1); // Capitalize the first character

  document.documentElement.setAttribute('data-theme', `${theme}`);
  nav.style.backgroundColor = `rgb(${navColor} / 50%)`;
  textBox.style.backgroundColor = `rgb(${textBoxColor} / 50%)`;
  toggleIcon.children[0].textContent = `${capitalizedText} Mode`;
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
  toggleIcon.children[1].classList.replace(
    (theme === 'dark') ? 'fa-sun' : 'fa-moon',
    (theme === 'dark') ? 'fa-moon' : 'fa-sun'
  );
}
