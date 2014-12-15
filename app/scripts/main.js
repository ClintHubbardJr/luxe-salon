/*jshint unused:false*/
'use strict';
$('.navbar-brand').click(function () {
  $('.navbar-nav li').removeClass('active');
});

//Dynamically assign height
function sizeHeader() {
  var headerHeight = $('.welcome').innerHeight() + 'px';
  $('#call-to-action').css('height', headerHeight);
}

// $(document).ready(sizeHeader);

$(window).resize(sizeHeader);
