window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('#navigationContainer');
    const name = document.querySelector('#navigationName');
    const arrow = document.querySelector('.arrow');
    if(window.pageYOffset>0){
      nav.classList.add("navigationShadow");
      name.style.color = "rgba(0,0,0,.5)";
      arrow.style.display = 'none';
    }else{
      nav.classList.remove("navigationShadow");
      name.style.color = "#333";
      arrow.style.display = 'block';
    }
});
