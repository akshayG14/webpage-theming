const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Event Listener for the theme toggle switch
toggleSwitch.addEventListener('change', switchTheme);

// Theme Switch function
function switchTheme(event) {
  (event.target.checked) ?
    document.documentElement.setAttribute('data-theme', 'dark') :
    document.documentElement.setAttribute('data-theme', 'light');
}
