$(function () {
  $("#header").load("header.html", function () {
    $('#j-ham').on('click', function () {
      $('.p-navi').toggleClass('p-navi-show');
      $('.c-navi__button').toggleClass('c-navi__button-show');
      $('body').toggleClass('u-back');
    });
  });
  $("#footer").load("footer.html");
});

$(function () {
  $('.js-menu__item__link').each(function () {
    $(this).on('click', function () {
      $("+.p-narrowdown__sub", this).slideToggle();
      $(this).toggleClass('on');
      return false;
    });
  });
});