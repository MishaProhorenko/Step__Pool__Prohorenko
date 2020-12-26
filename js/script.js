document.querySelector('.scroll-top').onclick = () => {
    window.scrollTo(pageYOffset, 0);
}

document.querySelector('.menu__link').onclick = () => {
  window.scrollTo(pageYOffset, 0);
}


document.querySelector('.header__link').onclick = () => {
  window.scrollTo(pageYOffset, 0);
}



$(document).ready(function(){
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock')
    })
  })