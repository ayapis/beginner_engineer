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

//画像アップロードの実装
$(function () {
  // クリックで画像を選択する場合
  $('#drop_area').on('click', function () {
    $('#input_file').click();
  });

  $('#input_file').on('change', function () {
    // 画像が複数選択されていた場合
    if (this.files.length > 1) {
      alert('アップロードできる画像は1つだけです');
      $('#input_file').val('');
      return;
    }
    handleFiles(this.files);
  });
  // ドラッグしている要素がドロップ領域に入ったとき・領域にある間
  $('#drop_area').on('dragenter dragover', function (event) {
    event.stopPropagation();
    event.preventDefault();
    $('#drop_area').css('border', '1px solid #333');  // 枠を実線にする
  });
  // ドラッグしている要素がドロップ領域から外れたとき
  $('#drop_area').on('dragleave', function (event) {
    event.stopPropagation();
    event.preventDefault();
    $('#drop_area').css('border', '1px dashed #aaa');  // 枠を点線に戻す
  });
  // ドラッグしている要素がドロップされたとき
  $('#drop_area').on('drop', function (event) {
    event.preventDefault();

    $('#input_file')[0].files = event.originalEvent.dataTransfer.files;

    // 画像が複数選択されていた場合
    if ($('#input_file')[0].files.length > 1) {
      alert('アップロードできる画像は1つだけです');
      $('#input_file').val('');
      return;
    }
    handleFiles($('#input_file')[0].files);
  });
  // 選択された画像ファイルの操作
  function handleFiles(files) {
    var file = files[0];
    var imageType = 'image.*';

    // ファイルが画像が確認する
    if (!file.type.match(imageType)) {
      alert('画像を選択してください');
      $('#input_file').val('');
      $('#drop_area').css('border', '1px dashed #aaa');
      return;
    }

    $('#drop_area').hide();  // いちばん上のdrop_areaを非表示にします
    $('#icon_clear_button').show();  // icon_clear_buttonを表示させます

    var img = document.createElement('img');  // <img>をつくります
    var reader = new FileReader();
    reader.onload = function () {  // 読み込みが完了したら
      img.src = reader.result;  // readAsDataURLの読み込み結果がresult
      $('#preview_field').append(img);  // preview_filedに画像を表示
    }
    reader.readAsDataURL(file); // ファイル読み込みを非同期でバックグラウンドで開始
  }
  // アイコン画像を消去するボタン
  $('#icon_clear_button').on('click', function () {
    $('#preview_field').empty();  // 表示していた画像を消去
    $('#input_file').val('');  // inputの中身を消去
    $('#drop_area').show();  // drop_areaをいちばん前面に表示
    $('#icon_clear_button').hide();  // icon_clear_buttonを非表示
    $('#drop_area').css('border', '1px dashed #aaa');  // 枠を点線に変更
  })
  // drop_area以外でファイルがドロップされた場合、ファイルが開いてしまうのを防ぐ
  $(document).on('dragenter', function (event) {
    event.stopPropagation();
    event.preventDefault();
  });
  $(document).on('dragover', function (event) {
    event.stopPropagation();
    event.preventDefault();
  });
  $(document).on('drop', function (event) {
    event.stopPropagation();
    event.preventDefault();
  });
})