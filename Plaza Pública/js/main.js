$(function(){
  if ($(window).width() > 1280){
    document.getElementById("animacion").src = "images/desktop.mp4"; 
  }
  else{
    document.getElementById("animacion").src = "images/mobile.webm"; 
  }
});

$(document).ready(function () {
  $('#carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2500
  });
});


$(document).ready(function () {
  $('#carousel-2').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2500
  });
});



