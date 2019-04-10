// Contador


$(document).ready(function () {
  $('.fa-volume-up').hide();
  actual = (new Date(Date.now())).getTime();
  pub = (new Date("March 10, 2019 00:00:00")).getTime();

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




let celeste = '#4CC4CE';
let cian = '#2CBEC9';
let red = '#EE6A5A';
let gray = '#939393';
let text = '#333333';
let chocolate = '#1a1a1a';
let rose = '#f3cfce';
let brown = '#7c2902';
let ocean = '#02737c';


function chart1() {

  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
    ['Entidad', 'Denuncias'],
    ['Grupo Escorpión, S.A.', 631],
    ['Protección Total, S.A.', 367],
    ['Vigilancia Y Seguridad Empresarial De Guatemala (VISEGUA), S.A.', 356],
    ['Alarmas De Guatemala, S.A.', 184],
    ['Seguridad Y Vigilancia El Ébano, S.A.', 172],
    ['Security Professional Systems, S.A.', 148],
    ['Seguridad 2614, S.A.', 119],
    ['La Seguridad De Guatemala, S.A.', 115],
    ['Servicios De Seguridad Integral (Omega 2000), S.A.', 86],
    ['Protección Metropolitana, S.A.', 72],
    ['Investigaciones Y Seguridad Profesional (ISP), S.A.', 63],
    ['Delta Nueve, S.A.', 54],
    ['Grupo Escorpión, S.A.', 53],
    ['Safari Seguridad, S.A.', 48],
    ['Seguridad Y Vigilancia El Ébano', 44],
    ['Rudy Valiente Guzmán', 41],
    ['Julio Raúl Alvarado Porres', 29],
    ['Roberto Mauricio Miralles González', 28],
    ['Enrique Aberel Rodriguez Figueroa', 27],
    ['Empresa De Seguridad Particular Elite, S.A.', 26],
    ['Rosa Edvel Orellana Alarcón', 25],
    ['VISEGUA,', 24],
    ['Juan Federico Gustavo Saravia Aguirre', 23],
    ['Safari Shooting Servicios Y Sistemas De Seguridad, S.A.', 22],
    ['Protección Técnica, S.A.', 22],
    ['Flor De María Hernández Catalán', 21],
    ['Hugo Ricardo Alvarado Chávez', 18],
    ['Eddie Walter Sempe Custodio', 15],
    ['Servicios De Seguridad Integral (Omega 2000), S.A. ', 14],
    ['Protección Electrónica, S.A.', 13],
    ['Security Professional Systems, S.A.', 13],
    ['Acsel Moises Urizar Cabrera', 11],
    ['Werner Francisco Herrera Alvarado', 10],
    ['Alarmas De Guatemala, S.A.', 10]
  ]);

  var options = {
    //title: 'Las más denunciadas',
    height: 550,
    maxLines: 50,
    tooltip: { isHtml: true },
    chartArea: {
      width: '100%',
      height: '90%'
    },
    series: { 0: { color: celeste } },
    legend: {
      position: 'none',
      textStyle:
      {
        color: text,
        fontName: 'Tisa Pro',
        fontSize: 16
      }
    },
    vAxis: {
      title: '',
      textStyle:
      {
        color: text,
        fontName: 'Tisa Pro',
        fontSize: 16
      }
    },
    hAxis: {
      title: '',
      textStyle:
      {
        color: text,
        fontName: 'Tisa Pro',
        fontSize: 16
      }
    },
    //pieSliceText: 'value'
  };

  // Instantiate and draw the chart.
  var chart = new google.charts.Bar(document.getElementById('grafico1'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function chart2() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
    ['Empresas', 'Licencias recibidas'],
    ['CORPO Q', 153],
    ['AIRE LIBRE', 152],
    ['MUNICAR', 115],
    ['CEMSA', 77],
    ['MUNICIONES', 68],
    ['COMERCIAL AGRICOLA BOLAÑOS', 53],
    ['ALMACEN EL BISONTE', 47],
    ['MAINLEY', 42],
    ['DEFENSA', 38],
    ['ARMAS DEFENSIVAS Y DEPORTIVAS', 31],
    ['MUNAR', 29],
    ['POLIGONOS S.A.', 24],
    ['SANTA CATARINA MITA', 23],
    ['CAMUFLAJE', 21],
    ['IMPORTADORA GUATEMALTECA', 18],
    ['IMSA', 18],
    ['ARMAS Y MUNICIONES', 15],
    ['SAFARI SHOOTING S.A.', 11],
    ['GIR', 11],
    ['COMERCIAL DE ARMAS Y MUNICIONES DE JUTIAPA', 10],
    ['STI GUATEMALA', 9],
    ['CONFEDERACION DEPORTIVA AUTONOMA DE GUATEMALA', 8],
    ['ESQUI-SPORT', 8],
    ['PUNTO DE MIRA', 7]
  ]);

  var options = {
    //title: 'Importadores de municiones',
    titleTextStyle: {
      family: 'Pluto Bold',
      size: 18,
      color: text
    },
    chartArea: {
      width: '100%',
      height: '90%'
    },
    legend: { position: 'none' },
    vAxis: {
      title: '',
      textStyle:
      {
        color: text,
        fontName: 'Tisa Pro',
        fontSize: 16
      }
    },
    hAxis: {
      title: '',
      textStyle:
      {
        color: text,
        fontName: 'Tisa Pro',
        fontSize: 16
      }
    },
    bars: 'vertical',
    series: { 0: { color: celeste } },
    tooltip: { isHtml: true },
    height: 400
  };

  // Instantiate and draw the chart.
  var chart = new google.charts.Bar(document.getElementById('grafico2'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}


/* Resize function built to avoid redraw charts multiple time while windows is resizing... specially on mobile! */
let free = true;

function redraw() {
  draw1();
  draw2();
}

$(window).resize(function () {
  if (free) {
    free = false;
    setTimeout(function () {
      redraw();
      free = true
    }, 1000);
  }
});


$(document).ready(redraw);