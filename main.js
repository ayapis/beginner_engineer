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


// ファイル名が長い場合に表示を短縮する
$(function () {
  $('input').on('change', function () {
    let file = $(this).prop('files')[0];
    file = file.name;
    let length = file.length;
    const maxlength = 22; // 最長文字数
    const startletter = 0; // 1番目から抜き出し
    const finishletter = 15; // 15文字抜き出し
    const lastletter = -7; // 最後から7文字抜き出し
    if (length < maxlength) {
      $('.filename').text(file);
    } else {
      let filefirst = file.slice(startletter, finishletter);
      let filelast = file.slice(lastletter);
      file = (filefirst + '...' + filelast);
      $('.filename').text(file);
    }
  });
});