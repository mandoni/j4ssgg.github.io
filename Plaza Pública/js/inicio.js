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




function chartA() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Concursos', 'Contrataciones directas'],
        ['2005', 56016131.67, 0],
        ['2006', 124880671.6, 0],
        ['2007', 54692233.31, 0],
        ['2008', 75274309.6, 0],
        ['2009', 232720155.1, 15657868.07],
        ['2010', 390351444.3, 55294828.5],
        ['2011', 327975647.2, 7232355.3],
        ['2012', 164734312.2, 60323597.49],
        ['2013', 499897135.3, 88764641.24],
        ['2014', 677375582.8, 170571],
        ['2015', 146424042.6, 8000],
        ['2016', 64571172.51, 2801977.93],
        ['2017', 431323273, 6315244.07],
        ['2018', 83495469.21, 81543.47]
    ]);

    var options = {
        chart: {
            //title: 'Contratos 2004-2008'
        },

        chartArea: {
            width: '100%',
            height: '90%'
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
        bars: 'horizontal',
        series: { 0: { color: celeste }, 1: { color: red } },
        tooltip: { isHtml: true },
        bar: { groupWidth: 75 },
        height: 800

    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('graficoA'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


function chartB() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Presupuesto PNC', 'Concursos', 'Contrataciones directas'],
        ['2004', 1124200000, 0, 0],
        ['2005', 1160000000, 56016131.67, 0],
        ['2006', 1288800000, 124880671.6, 0],
        ['2007', 1301800000, 54692233.31, 0],
        ['2008', 1634800000, 75274309.6, 0],
        ['2009', 1886600000, 232720155.1, 15657868.07],
        ['2010', 1972800000, 390351444.3, 55294828.5],
        ['2011', 2275200000, 327975647.2, 7232355.3],
        ['2012', 2347622265, 164734312.2, 60323597.49],
        ['2013', 2720828434, 499897135.3, 88764641.24],
        ['2014', 3092105375, 677375582.8, 170571],
        ['2015', 2900935861, 146424042.6, 8000],
        ['2016', 3251931133, 64571172.51, 2801977.93],
        ['2017', 0, 431323273, 6315244.07],
        ['2018', 0, 83495469.21, 81543.47]
    ]);

    var options = {
        chart: {
            //title: 'Seguridad pública versus seguridad privada'
        },

        chartArea: {
            width: '100%',
            height: '90%'
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
        bars: 'horizontal',
        series: { 0: { color: celeste }, 1: { color: red }, 2: { color: ocean } },
        tooltip: { isHtml: true },
        bar: { groupWidth: 85 },
        height: 1000
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('graficoB'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}



let grafico3_options = {
    backgroundColor: {
        fillOpacity: 0
    },
    legend: {
        textStyle:
        {
            color: text,
            fontName: 'Tisa Pro',
            fontSize: 12
        }
    },
    chartArea: {
        width: '100%',
        height: '90%'
    },
    height: 400,
    tooltip: { isHtml: true },
    colors: [celeste, red, ocean, brown],
    pieSliceText: 'percentage',
    vAxis: {
        textStyle:
        {
            color: text,
            fontName: 'Tisa Pro',
            fontSize: 16
        }
    },
    hAxis: {
        textStyle:
        {
            color: text,
            fontName: 'Tisa Pro',
            fontSize: 16
        }
    }
};


function grafico3_2004() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 0],*/
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 158200]
    ]);



    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2004'));
    chart.draw(data, grafico3_options);
}


function grafico3_2005() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 351456],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 13055205],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 433800]
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);


    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2005'));
    chart.draw(data, grafico3_options);
}

//grafico3_y2006 = [0, 3379200, 0, 0, 0, 2980800, 642432, 0, 595000, 0, 0, 0, 0, 0, 7597432];

function grafico3_2006() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 3379200],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 2980800],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 642432],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 595000]
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2006'));
    chart.draw(data, grafico3_options);
}

function grafico3_2007() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 3801600],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 7095600]
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2007'));
    chart.draw(data, grafico3_options);
}

function grafico3_2008() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 225000],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2008'));
    chart.draw(data, grafico3_options);
}

function grafico3_2009() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 747500],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        //['SIS S.A.', 19101090],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 816750]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2009'));
    chart.draw(data, grafico3_options);
}

function grafico3_2010() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 715000],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        //['SIS S.A.', 0],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 2543400]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2010'));
    chart.draw(data, grafico3_options);
}

function grafico3_2011() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],*/
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 480000],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 3445200]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2011'));
    chart.draw(data, grafico3_options);
}

function grafico3_2012() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],*/
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 171360],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 78500]
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2012'));
    chart.draw(data, grafico3_options);
}

function grafico3_2013() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],*/
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 276000],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 74000]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2013'));
    chart.draw(data, grafico3_options);
}

function grafico3_2014() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        ['CONDOR S.A.', 267000],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 720000],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        //['SIS S.A.', 0],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 276000]
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2014'));
    chart.draw(data, grafico3_options);
}

function grafico3_2017() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],*/
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 72000]
        /*['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 0],
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]*/
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2017'));
    chart.draw(data, grafico3_options);
}


function grafico3_total() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresas', 'Contratos'],
        ['CONDOR S.A.', 267000],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 7180800],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 747500],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 720000],
        ['CORPORACION POLIMAYA S.A.', 715000],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 2980800],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 993888],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 72000],
        ['SIS S.A.', 40071895],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 480000],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 1157160],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 78500],
        ['TAURUS S.A.', 6879350],
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 158200]
    ]);


    options = {
        backgroundColor: {
            fillOpacity: 0
        },
        legend: {
            position: 'none',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        chartArea: {
            width: '90%',
            height: '90%'
        },
        sliceVisibilityThreshold: 0.03,
        pieSliceText: 'value',
        height: 400,
        pieHole: .4,
        tooltip: { isHtml: true },
        vAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        hAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
	bars: 'vertical',
        series: { 0: { color: celeste } }
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico3_total'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function chart4() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresas', 'Contratos'],
        ['CONDOR S.A.', 267000],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 78500],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 723360],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 72000],
        ['TAURUS S.A.', 74000],
        ['CORP. DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 720000]
    ]);


    options = {
        chart: {
            //title: 'Los contratistas de las empresas con acuerdo'
        },
        legend: { position: 'none' },
        vAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        hAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        bars: 'vertical',
        series: { 0: { color: celeste } },
        tooltip: { isHtml: true },
        height: 370
    };
    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico4'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


function chart5() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresas', 'Sí', 'Sí, y más con mismos apellidos'],    
        ['ALFA UNO, S.A', 1, 0],
        ['ALARMAS DE GUATEMALA, S.A.', 2, 1],
        ['BLACKTHORNE SECURITY, S.A.', 1, 0],
        ['CORPORACION DE SEGURIDAD COMANDO SUR, S.A.', 1, 0],
        ['EMPRESA DE SEGURIDAD PARTICULAR ELITE, S.A.', 2, 0],
        ['GRUPO ESCORPION, S.A.', 5, 0],
        ['ORANIZACIÓN DE SISTEMAS DE SEGURIDAD INTEGRAL E INVESTIGACIONES, S.A.', 1, 0],
        ['PROTECCION METROPOLITANA, S.A.', 1, 0],
        ['PROTECCION TOTAL, S.A.', 2, 0],
        ['SAFARI SEGURIDAD, S.A.', 3, 0],
        ['SECURITY PROFESSIONAL SYSTEMS, S.A.', 3, 0],
        ['SISTEMAS DE SEGURIDAD', 1, 0],
        ['SERVICIO DE SEGURIDAD INTEGRAL, S.A.', 13, 1],
        ['VIGILANCIA Y SEGURIDAD EMPRESARIAL DE GUATEMALA', 1, 0],
        ['SEGURIDAD 2614, S.A.', 1, 0]
    ]);


    options = {
        chart: {
            //title: 'Los contratistas de las empresas con acuerdo',
        },
        legend: {
            position: 'none',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        chartArea: {
            width: '90%',
            height: '90%'
        },
        pieSliceText: 'value',
        pieHole: 0.4,
        tooltip: { isHtml: true },
        vAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        hAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        height: 400,
	bars: 'vertical',
	series: { 0: { color: celeste }, 1: { color: red} }

    };
    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico5'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}



/* Resize function built to avoid redraw charts multiple time while windows is resizing... specially on mobile! */
let free = true;

function redraw() {
  draw1();
  draw2();
  draw22();
  draw23();
  drawA();
  drawB();
    draw41();
    draw42();
    draw43();
    draw44();
    draw45();
    draw46();
    draw47();
    draw41();
    draw48();
    draw49();
    draw410();
    draw411();
    draw412();
    draw413();
	draw5();
    draw6();
  
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

