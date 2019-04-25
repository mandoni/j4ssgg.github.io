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
    ['Año', 'Balas Importadas'],
    ['1996', 248500],
    ['1997', 25453910],
    ['1998', 21019500],
    ['1999', 21877198],
    ['2000', 23650400],
    ['2001', 35848260],
    ['2002', 31420780],
    ['2003', 8359950],
    ['2008', 106000],
    ['2009', 26212000],
    ['2010', 25864500],
    ['2011', 26104100],
    ['2012', 21178460],
    ['2013', 16333600],
    ['2014', 29987200],
    ['2015', 27042200],
    ['2016', 27071450],
    ['2017', 34467800],
    ['2018', 13273650]
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



function chart22() {

  var data = google.visualization.arrayToDataTable([
    ['Importadores', 'Parent', 'Armas Importadas', 'Posición '],
    ['Armas importadas', null, 0, 0],
    ['MUNICIONES', 'Armas importadas', 43324, 35],
    ['CEMSA', 'Armas importadas', 42223, 34],
    ['CORPO Q', 'Armas importadas', 31577, 33],
    ['AIRE LIBRE', 'Armas importadas', 27383, 32],
    ['ALMACEN EL BISONTE', 'Armas importadas', 24305, 31],
    ['DIRECCION GENERAL DE LA POLICIA NACIONAL CIVIL', 'Armas importadas', 15446, 30],
    ['MAINLEY', 'Armas importadas', 15228, 29],
    ['TILSA', 'Armas importadas', 14929, 28],
    ['MUNAR', 'Armas importadas', 13812, 27],
    ['STI GUATEMALA', 'Armas importadas', 9958, 26],
    ['ARMAS DEFENSIVAS Y DEPORTIVAS', 'Armas importadas', 9927, 25],
    ['COMERCIAL AGRICOLA BOLAÑOS', 'Armas importadas', 9606, 24],
    ['PUNTO DE MIRA', 'Armas importadas', 9267, 23],
    ['DEFENSA', 'Armas importadas', 8408, 22],
    ['GIR', 'Armas importadas', 5886, 21],
    ['IMSA', 'Armas importadas', 5647, 20],
    ['EQUIPO DEFENSIVO', 'Armas importadas', 5558, 19],
    ['BIOSERUM REPRESENTACIONES, SOCIEDAD ANONIMA', 'Armas importadas', 4788, 18],
    ['ARMSA GUATEMALA', 'Armas importadas', 4455, 17],
    ['MUNICAR', 'Armas importadas', 4357, 16],
    ['CAMUFLAJE', 'Armas importadas', 4355, 15],
    ['ARMERIA EL AGUILA', 'Armas importadas', 1498, 14],
    ['FRANSALVA, SOCIEDAD ANONIMA', 'Armas importadas', 1447, 13],
    ['ESQUI-SPORT', 'Armas importadas', 1350, 12],
    ['ARMAS Y MUNICIONES GUATEMALA', 'Armas importadas', 1296, 11],
    ['SANTA CATARINA MITA', 'Armas importadas', 1007, 10],
    ['AGUILA DEL DESIERTO', 'Armas importadas', 1007, 9],
    ['POLIGONOS SOCIEDAD ANONIMA', 'Armas importadas', 909, 8],
    ['DAGET INTERNATIONAL', 'Armas importadas', 725, 7],
    ['GEFAHR', 'Armas importadas', 723, 6],
    ['GUNDEPOT', 'Armas importadas', 683, 5],
    ['ARESCO', 'Armas importadas', 603, 4],
    ['SHOOTING SYSTEMS', 'Armas importadas', 554, 3],
    ['CENTURIA', 'Armas importadas', 480, 2],
    ['PROTECCION Y DEFENSA', 'Armas importadas', 400, 1],
    ['ARMAS Y MUNICIONES LA TORRE', 'Armas importadas', 300, 0],
    ['MINISTERIO DE GOBERNACION', 'Armas importadas', 250, -1],
    ['EL TIRO 22', 'Armas importadas', 200, -2],
    ['MARFILSA', 'Armas importadas', 200, -3],
    ['COMERCIAL DE ARMAS Y MUNICIONES DE JUTIAPA', 'Armas importadas', 200, -4],
    ['IMPORTADORA Y ARMERIA TAURUS DE GUATEMALA', 'Armas importadas', 175, -5],
    ['DISTRIBUIDORA PIPER', 'Armas importadas', 130, -6],
    ['HALCON DEPORTES', 'Armas importadas', 125, -7],
    ['SECRETARIA DE ASUNTOS ADMINISTRATIVOS Y DE SEGURIDAD DE LA PRESIDENCIA DE LA REPUBLICA', 'Armas importadas', 120, -8],
    ['LA CABAÑA DEL VAQUERO', 'Armas importadas', 105, -9],
    ['MSA', 'Armas importadas', 100, -10],
    ['EL VENADITO', 'Armas importadas', 100, -11],
    ['ALTO IMPACTO', 'Armas importadas', 100, -12],
    ['MUNIARM GUATEMALA', 'Armas importadas', 100, -13],
    ['DIVISION DE ARMAS Y MUNICIONES', 'Armas importadas', 100, -14],
    ['EL GLADIADOR', 'Armas importadas', 100, -15],
    ['MUNICIONES LA TORRE', 'Armas importadas', 97, -16],
    ['IMPORTADORA Y DISTRIBUIDORA RINSA, SOCIEDAD ANONIMA', 'Armas importadas', 87, -17],
    ['GUN-MATE', 'Armas importadas', 80, -18],
    ['FRANSALVA, SOCIEDAD ANONIMA ', 'Armas importadas', 75, -19],
    ['NIVISA', 'Armas importadas', 75, -20],
    ['COMISION INTERNACIONAL CONTRA LA IMPUNIDAD EN GUATEMALA', 'Armas importadas', 60, -21],
    ['ARMERIA EL GUERRERO', 'Armas importadas', 50, -22],
    ['ARMAS TACTICAS', 'Armas importadas', 50, -23],
    ['BLACK DESERT', 'Armas importadas', 41, -24],
    ['GADAR', 'Armas importadas', 40, -25],
    ['TIRO PRACTICO', 'Armas importadas', 31, -26],
    ['ESTADO MAYOR PRESIDENCIAL', 'Armas importadas', 30, -27],
    ['ASOCIACION DEPORTIVA NACIONAL DE TIRO CON ARMAS DE CAZA', 'Armas importadas', 24, -28],
    ['CONFEDERACION DEPORTIVA AUTONOMA DE GUATEMALA', 'Armas importadas', 16, -29],
    ['DIRECCION GENERAL DE INTELIGENCIA CIVIL', 'Armas importadas', 6, -30],
    ['ASOCIACION DEPORTIVA NAC.', 'Armas importadas', 5, -31],
    ['DIRINSA', 'Armas importadas', 3, -32],
    ['DIMPS', 'Armas importadas', 2, -33],
    ['POLICIA NACIONAL CIVIL', 'Armas importadas', 1, -34]
  ]);


  var options = {
    highlightOnMouseOver: true,
    maxDepth: 1,
    maxPostDepth: 2,
    minHighlightColor: celeste,
    midHighlightColor: rose,
    maxHighlightColor: rose,
    minColor: celeste,
    midColor: rose,
    maxColor: red,
    headerHeight: 35,
    showScale: false,
    height: 500,
    useWeightedAverageForAggregation: false,
    generateTooltip: showFullTooltip
  };

  function showFullTooltip(row, size, value) {
    if (row == 0) {
      return '<div style="background:#F2F2F2; padding:10px; border-style:solid">' +
        '<span style="font-family:Courier"><b>Armas totales importadas</b>: ' + size + '</span></div>';
    }
    return '<div style="background:#F2F2F2; padding:10px; border-style:solid">' +
      '<span style="font-family:Courier"><b>Empresa</b>: ' + data.getValue(row, 0) +
      '<br><b>' + data.getValue(row, 1) + ':</b> ' + data.getValue(row, 2) +
      '<br><b>' + data.getColumnLabel(3) + ':</b> ' + (row) + '</span></div>';
  }


  var visualization = new google.visualization.TreeMap(document.getElementById('grafico22'));
  visualization.draw(data, options);
}






function chart23() {

  var data = google.visualization.arrayToDataTable([
    ['Contratistas', 'Parent', 'Máximos contratistas', 'Posición'],
    ['Contrataciones', null, 0, 0],
    ['INTERNET TELECOMUNICATION COMPANY DE GUATEMALA, S.A.', 'Contrataciones', 288587748.25, 254],
    ['CONSTRUCCION Y TELE COMUNICACIONES, SOCIEDAD ANONIMA', 'Contrataciones', 262507968, 228],
    ['PROTECCION TOTAL SOCIEDAD ANONIMA', 'Contrataciones', 256000000, 221],
    ['INDRA SISTEMAS, S.A.', 'Contrataciones', 255488746.65, 221],
    ['PROTECCION METROPOLITANA SOCIEDAD ANONIMA', 'Contrataciones', 246204738.33, 212],
    ['V.I.P. SECURITY, SOCIEDAD ANONIMA', 'Contrataciones', 146462801.8, 112],
    ['CORPORACION DE  SEGURIDAD COMANDO  SUR SOCIEDAD  ANONIMA', 'Contrataciones', 135567481.93, 101],
    ['SEGURIDAD Y VIGILANCIA EL EBANO SOCIEDAD ANONIMA', 'Contrataciones', 122351537.59, 88],
    ['GRUPO ESCORPION, SOCIEDAD ANONIMA', 'Contrataciones', 115437008.14, 81],
    ['SERVICIO DE SEGURIDAD INTEGRAL, SOCIEDAD ANONIMA', 'Contrataciones', 112326853.28, 78],
    ['SECURITY PROFESSIONAL SYSTEMS, SOCIEDAD ANONIMA', 'Contrataciones', 90792699.84, 56],
    ['VIGILANCIA Y SEGURIDAD EMPRESARIAL DE GUATEMALA, SOCIEDAD ANONIMA', 'Contrataciones', 73367332.33, 39],
    ['EMPRESA DE SEGURIDAD PARTICULAR ELITE S.A.', 'Contrataciones', 34048912, 0],
    ['SAFARI SEGURIDAD SOCIEDAD ANONIMA', 'Contrataciones', 33550800, -1],
    ['ARANA, CARRILLO SERVICIOS DE VIGILANCIA PROFESIONAL, S.A.', 'Contrataciones', 32573897.52, -2],
    ['PROTECCION TECNICA, SOCIEDAD ANONIMA', 'Contrataciones', 32500850.03, -2],
    ['ALARMAS DE GUATEMALA SOCIEDAD ANONIMA', 'Contrataciones', 30018759.32, -5],
    ['COMANDO NAVAL DEL PACIFICO', 'Contrataciones', 28938899.9, -6],
    ['WACKENHUT DE GUATEMALA SOCIEDAD ANONIMA', 'Contrataciones', 14980745, -20],
    ['PROTECCION ELECTRONICA, SOCIEDAD ANONIMA', 'Contrataciones', 11861797.52, -23],
    ['LA SEGURIDAD DE GUATEMALA, SOCIEDAD ANONIMA', 'Contrataciones', 9226931.66, -25],
    ['INVESTIGACIONES Y SEGURIDAD PROFESIONAL, SOCIEDAD ANÃ“NIMA', 'Contrataciones', 8256600, -26],
    ['ORGANIZACION DE SISTEMAS DE SEGURIDAD INTEGRAL E INVESTIGACIONES, SOCIEDAD ANONIMA', 'Contrataciones', 7655218, -27],
    ['ALFA UNO SOCIEDAD ANONIMA', 'Contrataciones', 2158834.72, -32],
    ['SEGURIDAD 2614, SOCIEDAD ANONIMA', 'Contrataciones', 305193.55, -34]

  ]);


  var options = {
    highlightOnMouseOver: true,
    maxDepth: 1,
    maxPostDepth: 2,
    minHighlightColor: celeste,
    midHighlightColor: rose,
    maxHighlightColor: rose,
    minColor: celeste,
    midColor: rose,
    maxColor: red,
    headerHeight: 35,
    showScale: false,
    height: 500,
    useWeightedAverageForAggregation: false,
    generateTooltip: showFullTooltip
  };

  function showFullTooltip(row, size, value) {
    if (row == 0) {
      return '<div style="background:#F2F2F2; padding:10px; border-style:solid">' +
        '<span style="font-family:Courier"><b>Contrataciones por Q </b>' + size + '</span></div>';
    }
    return '<div style="background:#F2F2F2; padding:10px; border-style:solid">' +
      '<span style="font-family:Courier"><b>Empresa</b>: ' + data.getValue(row, 0) +
      '<br><b>' + data.getValue(row, 1) + ':</b> Q ' + data.getValue(row, 2) +
      '<br><b>' + data.getColumnLabel(3) + ':</b> ' + (row) + '</span></div>';
  }

  var visualization = new google.visualization.TreeMap(document.getElementById('grafico23'));
  visualization.draw(data, options);
}

/* Resize function built to avoid redraw charts multiple time while windows is resizing... specially on mobile! */
let free = true;

function redraw() {
  draw1();
  draw2();
  draw22();
  draw23();
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

