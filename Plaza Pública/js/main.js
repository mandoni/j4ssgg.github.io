

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



// Contador


$(document).ready(function () {
  actual = (new Date(Date.now())).getTime();
  pub = (new Date("March 05, 2019 00:00:00")).getTime();  

  var times = Math.round((actual - pub)/1000, 0);
  var balas = document.getElementById("balas");
  window.setInterval(function () {
    balas.innerHTML = times;
    times++;
  }, 1000);
});