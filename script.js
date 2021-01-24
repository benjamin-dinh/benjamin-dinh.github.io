var rellax = new Rellax('.rellax');

// NAVBAR SHADOW AND HIDE ARROW ON SCROLL
window.addEventListener('scroll',(e)=>{
    // const main = getComputedStyle(document.body).getPropertyValue('--main');
    // const light = getComputedStyle(document.body).getPropertyValue('--light');
    const header = document.getElementById("headerText");
    header.style.opacity = 1 - window.pageYOffset/(window.innerHeight/1.7) +'';
    const nav = document.querySelector('#navigationContainer');
    // const name = document.querySelector('#navigationName');
    const arrow = document.querySelector('.arrow');
    // const navbuttons = document.querySelectorAll('.navbar-light .navbar-nav .nav-link')
    if(window.pageYOffset>0){
      nav.classList.add("navigationShadow");
      // name.style.color = light;
      arrow.style.display = 'none';
      // for(var i =0; i<navbuttons.length ;i++){
      //   navbuttons[i].style.color= light;
      // }
    }else{
      nav.classList.remove("navigationShadow");
      // name.style.color = main;
      arrow.style.display = 'block';
      // for(var i =0; i<navbuttons.length;i++){
      //   navbuttons[i].style.color= main;
      // }
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