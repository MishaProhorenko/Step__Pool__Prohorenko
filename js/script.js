document.querySelector('.scroll-top').onclick = () => {
  window.scrollTo(pageYOffset, 0);
}

document.querySelector('.menu__link').onclick = () => {
  window.scrollTo(pageYOffset, 0);
}



$(document).ready(function () {
  $('.navi__burger').click(function (event) {
    $('.navi__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock')
  })
})