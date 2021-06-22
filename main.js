// ハンバーガーメニューの開閉、ハンバーガーメニュー表示の際はメイン部分を暗く
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
      $('.js-menu__item__link').not($(this)).siblings('.p-narrowdown__sub').slideUp();
      $('.js-menu__item__link').not($(this)).removeClass('on');
      return false;
    });
  });
});


// ファイル名を表示
$(function () {
  $('input').on('change', function () {
    let file = $(this).prop('files')[0];
    let file = file.name
    let length = file.length;
    if (length < 22) {
      $('.filename').text(file);
    } else {
      let filefirst = file.slice(0, 15);
      let filelast = file.slice(-7);
      let file = (filefirst + '...' + filelast);
      $('.filename').text(file);
    }
  });
});