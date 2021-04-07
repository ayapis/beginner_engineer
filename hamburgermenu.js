$(function () {
  $('#j-ham').on('click', function () {
    $('.p-navi').toggleClass('p-navi-show');
    $('.c-navi__button').toggleClass('c-navi__button-show');
    $('body').toggleClass('body-show');
    $('.l-header').toggleClass('l-header-show');
  });
});