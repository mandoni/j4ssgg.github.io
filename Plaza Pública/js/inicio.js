// Contador


$(document).ready(function () {
  actual = (new Date(Date.now())).getTime();
  pub = (new Date("March 05, 2019 00:00:00")).getTime();  

  var times = Math.round((actual - pub)/1000, 0);
  var balas = document.getElementById("balas");
  window.setInterval(function () {
    balas.innerHTML = times;
    times++;
	añadirBala($('.contador-balas'));
  }, 1000);
});


var balaDOM = "<img src='images/bala.png' class='balasC'>";
function añadirBala(dom){
	if (($('.balasC').length + 1) * ($('.balasC').width() +5)> $('.contador-balas').width()){
		dom.html('');
	}
	dom.append(balaDOM);
	
}


