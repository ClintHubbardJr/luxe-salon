/*jshint unused:false*/
'use strict';
$('.navbar-brand').click(function () {
  $('.navbar-nav li').removeClass('active');
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('#call-to-action').css('bottom', -(scrolled * 0.1) + 'px');
}

$(window).scroll(function (e) {
  parallax();
});
