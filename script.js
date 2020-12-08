// NAVBAR SHADOW ON SCROLL
window.addEventListener('scroll',(e)=>{
    // const main = getComputedStyle(document.body).getPropertyValue('--main');
    // const light = getComputedStyle(document.body).getPropertyValue('--light');
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

// SCROLL TO TOP
const name = document.querySelector('#navigationName');
name.addEventListener('click',(e)=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// DARK THEME TOGGLER
// credit to: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
