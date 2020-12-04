window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('#navbarContainer');
    const name = document.querySelector('#navbarName');
    const arrow = document.querySelector('.arrow');
    if(window.pageYOffset>0){
      nav.classList.add("floatingNav");
      name.style.color = "rgba(0,0,0,.5)";
      arrow.style.display = 'none';
    }else{
      nav.classList.remove("floatingNav");
      name.style.color = "rgb(190, 2, 2)";
      arrow.style.display = 'block';
    }
});
