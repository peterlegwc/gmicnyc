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
      if (y + $(window).height() === $(document).height()) {
        $('.top-arrow').css('bottom', $('footer').outerHeight() + 20);
      }
      else {
        $('.top-arrow').css('bottom','20px');
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

  // handle mobile menu clicks to deal with Angular
  $('body').on('click', '#gmicnyc-navbar.navbar-collapse.collapse.in a', function() {
    $('#gmicnyc-navbar').collapse('toggle');
  });
});
