// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Hide range.
var hide = document.querySelector('.js-hiderange');
var initHideRange = new Powerange(hide, { hideRange: true, start: 70 });

/* Function buttons Active */
$(".tmr").click(function(){
  $(".tmr").addClass("active btn-warning");
  $(".tod").removeClass("active btn-warning");
  $(".tod").addClass("btn-info");
  $(".lat").removeClass("active btn-warning");
  $(".lat").addClass("btn-info");
});

$(".tod").click(function(){
  $(".tod").addClass("active btn-warning");
  $(".tmr").removeClass("active btn-warning");
  $(".tmr").addClass("btn-info");
  $(".lat").removeClass("btn-warning active");
  $(".lat").addClass("btn-info");
});

$(".lat").click(function(){
$(".lat").addClass("active btn-warning");
  $(".tod").removeClass("active btn-warning");
  $(".tod").addClass("btn-info");
  $(".tmr").removeClass("active btn-warning");
  $(".tmr").addClass("btn-info");
});
