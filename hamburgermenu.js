$(function () {
  $('#j-hamopen').on('click', function () {
    $('.p-navi').css('right', '0');
  });
  $('#j-hamclose').on('click', function () {
    $('.p-navi').css('right', '-100%');
  });
});