'use strict';

$(function () {

  // ページトップボタン
  var pagetop = $('#top-btn');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  // ホバー切替
  // （下３つの画像にホバーしたら、メイン画像はその画像を表示する）
  $('.imgs img').on('mouseover', function () {
    const img_src = $(this).attr("src");
    if ($('.header-img').attr("src") != img_src) {
      $('.header-img').fadeOut(500, function () {
        $(".header-img").attr({ src: img_src });
        $(".header-img").fadeIn(500);
      })
    } 
  });

  // （h1にホバーしたら、メイン画像は元の画像を表示する）
  $('.desc h1').on('mouseover', function(){
    if($('.header-img').attr("src") != 'images/mainvisual.jpg' ) {
      $('.header-img').fadeOut(500, function () {
        $(".header-img").attr({ src: 'images/mainvisual.jpg' });
        $(".header-img").fadeIn(500);
      })
    }
  });

});