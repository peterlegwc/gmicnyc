'use strict';
$(document).ready(function() {
  var navOffset = $('.navbar').height();

  if ($(window).width() > 768) {
    var topThreshold = $(window).height() / 2;
    $(window).scroll(function () {
      var y = $(window).scrollTop();
      if (y > navOffset) {
        $('.navbar').css('background-color','rgba(255,255,255,0.95)');
      }
      else {
        $('.navbar').css('background-color','rgba(255,255,255,0.5)');
      }
      if (y > topThreshold) {
        $('.top-arrow').css('opacity','1');
      }
      else {
        $('.top-arrow').css('opacity','0');
      }
    });
  }

  $('a[href^="#"][href!="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top - navOffset,
    }, 900, 'swing');
  });
});
