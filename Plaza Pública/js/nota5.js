/*$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';


    grafico1_x = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

    var grafico1 = [
        {
            autosize: true,
            x: grafico1_x,
            y: [619,593,555,563,566,531,517,533,540,463,307],
            type: 'bar',
            name: "Arma Blanca"
        },
        {
            autosize: true,
            x: grafico1_x,
            y: [5237,5405,5009,4676,4226,4258,4128,3899,3574,3431,2595],
            type: 'bar',
            name: "Arma de Fuego"
        },
        {
            autosize: true,
            x: grafico1_x,
            y: [1,10,11,14,0,0,1,0,7,1,0],
            type: 'bar',
            name: "Artefacto Explosivo"
        },
        {
            autosize: true,
            x: grafico1_x,
            y: [201,221,179,180,147,183,137,138,144,221,155],
            type: 'bar',
            name: "Estrangulamiento"
        },
        {
            autosize: true,
            x: grafico1_x,
            y: [17,49,33,44,13,33,18,23,23,29,7],
            type: 'bar',
            name: "Linchamiento"
        },
        {
            autosize: true,
            x: grafico1_x,
            y: [217,220,173,204,203,248,187,185,232,265,169],
            type: 'bar',
            name: "Objeto Contundente"
        }
    ];

    var grafico1_layout = {

        autosize: true,
        height: 500,
        barmode: 'stack',

        //title: {
            text: 'Homicidios 2008-2018',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },

        xaxis: {
            automargin: true,
            font: {
                family: 'TisaPro',
                size: 14,
                color: text
            }
        },

        yaxis: {
            automargin: true,
            font: {
                family: 'TisaPro',
                size: 14,
                color: text
            }
        }
    };


    var grafico2 = [
        {
            autosize: true,

            x: [
                'CORPO Q',
                'AIRE LIBRE',
                'MUNICAR','CEMSA',
                'MUNICIONES',
                'COMERCIAL AGRICOLA BOLAÑOS',
                'ALMACEN EL BISONTE',
                'MAINLEY',
                'DEFENSA',
                'ARMAS DEFENSIVAS Y DEPORTIVAS',
                'MUNAR','POLIGONOS S.A.',
                'SANTA CATARINA MITA',
                'CAMUFLAJE',
                'IMPORTADORA GUATEMALTECA',
                'IMSA','ARMAS Y MUNICIONES',
                'SAFARI SHOOTING S.A.',
                'GIR',
                'COMERCIAL DE ARMAS Y MUNICIONES DE JUTIAPA',
                'STI GUATEMALA',
                'CONFEDERACION DEPORTIVA AUTONOMA DE GUATEMALA',
                'ESQUI-SPORT',
                'PUNTO DE MIRA'
            ],
            y: [153,152,115,77,68,53,47,42,38,31,29,24,23,21,18,18,15,11,11,10,9,8,8,7],
            type: 'bar',
            marker: {
                color: celeste
            }
            text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'
        }

        
    ];

    var grafico2_layout = {

        autosize: true,
        height: 600,

        //title: {
            text: 'Importadores de municiones',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },

        xaxis: {
            automargin: true,
            ticks: 'outside',
            tickangle: 45,
            font: {
                family: 'TisaPro',
                size: 14,
                color: text
            }
        },

        yaxis: {
            automargin: true,
            font: {
                family: 'TisaPro',
                size: 14,
                color: text
            }
        }
    };

    Plotly.newPlot('grafico1', grafico1, grafico1_layout, { responsive: true, displayModeBar: false });
    
    Plotly.newPlot('grafico2', grafico2, grafico2_layout, { responsive: true, displayModeBar: false });

});*/


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
        ['Año', 'Arma Blanca ', 'Arma de Fuego ', 'Artefacto Explosivo ', 'Estrangulamiento ', 'Linchamiento ', 'Objeto Contundente '],
        ['2008', 619, 5237, 1, 201, 17, 217],
        ['2009', 593, 5405, 10, 221, 49, 220],
        ['2010', 555, 5009, 11, 179, 33, 173],
        ['2011', 563, 4676, 14, 180, 44, 204],
        ['2012', 566, 4226, 0, 147, 13, 203],
        ['2013', 531, 4258, 0, 183, 33, 248],
        ['2014', 517, 4128, 1, 137, 18, 187],
        ['2015', 533, 3899, 0, 138, 23, 185],
        ['2016', 540, 3574, 7, 144, 23, 232],
        ['2017', 463, 3431, 1, 221, 29, 265],
        ['2018', 307, 2595, 0, 155, 7, 169]
    ]);

    var options = {
        //title: 'Homicidios 2008-2018'
        chartArea: {
            width: '100%',
            height: '70%'
        },
        legend: { position: 'bottom' },
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
        //bar: { groupWidth: '75%' },
        //isStacked: true,
        colors: [red, celeste, gray, rose, ocean, brown],
        bars: 'horizontal',
        bar: { groupWidth: 100 },
        height: 1200,
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico1'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


//grafico2_x = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
//y: [78467,65384,106869,115243,66171,78494,58248,62707,62429,21595],

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