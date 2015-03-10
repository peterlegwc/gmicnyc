'use strict';
$(document).ready(function() {
  // toggle top arrow on desktops
  if ($(window).width() > 768) {
    $(window).scroll(function () {
      var y = $(window).scrollTop();

      if (y > $(window).height()) {
        $('.top-arrow').css('opacity','1');
      }
      else {
        $('.top-arrow').css('opacity','0');
      }
    });
  }
  // smooth scroll to top
  $('.top-arrow a').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top
    }, 900, 'swing');
  });
});
