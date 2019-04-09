// Contador


$(document).ready(function () {
  $('.fa-volume-up').hide();
  actual = (new Date(Date.now())).getTime();
  pub = (new Date("March 05, 2019 00:00:00")).getTime();

  var times = Math.round((actual - pub) / 1000, 0);
  var balas = document.getElementById("balas");
  window.setInterval(function () {
    balas.innerHTML = times;
    times++;
    añadirBala($('.contador-balas'));
  }, 1000);
});


var balaDOM = "<img src='images/bala.png' class='balasC'>";
function añadirBala(dom) {
  if (($('.balasC').length + 1) * ($('.balasC').width() + 5) > $('.contador-balas').width()) {
    dom.html('');
  }
  dom.append(balaDOM);

}

$(function () {
  if ($(window).width() > 1280) {
    document.getElementById("animacion").src = "images/landing.webm";
  }
  else {
    document.getElementById("animacion").src = "images/landing.webm";
  }
});

let muted = true;

$(document).on('click', 'div.vol', function () {
  if (muted) {
    $("video").prop('muted', false);
    $('.fa-volume-up').show();
    $('.fa-volume-mute').hide();
  }
  else {

    $("video").prop('muted', true);
    $('.fa-volume-up').hide();
    $('.fa-volume-mute').show();
  }
  muted = !muted;
});