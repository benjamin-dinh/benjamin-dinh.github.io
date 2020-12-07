window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('#navigationContainer');
    const name = document.querySelector('#navigationName');
    const arrow = document.querySelector('.arrow');
    const navbuttons = document.querySelectorAll('.navbar-light .navbar-nav .nav-link')
    if(window.pageYOffset>0){
      nav.classList.add("navigationShadow");
      name.style.color = "rgba(0,0,0,.5)";
      arrow.style.display = 'none';
      for(var i =0; i<navbuttons.length ;i++){
        navbuttons[i].style.color= "rgba(0,0,0,.5)";
      }
    }else{
      nav.classList.remove("navigationShadow");
      name.style.color = "#333";
      arrow.style.display = 'block';
      for(var i =0; i<navbuttons.length;i++){
        navbuttons[i].style.color= "#333";
      }
    }
});

const name = document.querySelector('#navigationName');
name.addEventListener('click',(e)=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
});