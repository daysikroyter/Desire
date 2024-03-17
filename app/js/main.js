$(function () {
  $('.nav__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
    $('body').addClass('lock');
  });

  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
    $('body').removeClass('lock');
  });

  $(document).on('click', function (event) {
    if ($(event.target).hasClass('lock')) {
      $('.rightside-menu').addClass('rightside-menu--close');
      $('body').removeClass('lock');
    }
  });

  $('.top__slider').slick({
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true
  });
});