// NAVBAR SHADOW AND HIDE ARROW ON SCROLL
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll',(e)=>{
  // hide navbar
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 0 || prevScrollpos > currentScrollPos) {
    document.getElementById("navigationContainer").style.transform = "translateY(0)";
  } else{
    document.getElementById("navigationContainer").style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
  // hide arrow if not at the top of page
  const arrow = document.querySelector('.arrow');
  if(window.pageYOffset>0){
    arrow.style.display = 'none';
  }
  else{
    arrow.style.display = 'block';
  }
});

// DARK THEME TOGGLER
// credit to: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
  }    
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// YEAR UPDATE
window.onload = function(){
  var date = new Date().getFullYear();
  document.getElementById("year").innerHTML = date;
}