
/*
$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';


    var grafico1 = [{
        x: [
            'Seguridad y Vigilancia',
            'Equipo',
            'Cámaras de Video CCT',
            'Armas y Municiones',
            'Consultorías y Servicios'
        ],
        y: [1883677377, 721418733.1, 586014321.1, 137988426.7, 632722.84],
        type: 'bar',
        autosize: true,
        width: [0.4,0.4,0.4,0.4,0.4],
        marker: {
            color: celeste           
        }
    }];

    grafico1_layout = {
        //title: {
            text: '¿En qué se gasta más?',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },
        autosize: true,
        xaxis: {
            font: {
                family: 'TisaPro',
                size: 14,
                color: text
            }
        },
        yaxis: {
            font: {
                family: 'TisaPro',
                size: 8,
                color: text
            }
        }
    }


    var grafico2 = [{
        x: [
            'Seguridad y Vigilancia',
            'Consultorías y Servicios',
            'Equipo',
            'Cámaras de Video CCT',
            'Armas y Municiones',
        ],
        y: [194979850.5, 21760538.21, 10991501.51, 7569826.83, 1348910],
        type: 'bar',
        autosize: true,
        width: [0.4,0.4,0.4,0.4,0.4],
        marker: {
            color: red
        }
    }];

    grafico2_layout = {
        //title: {
            text: 'Las compras directas',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },
        autosize: true,
        xaxis: {
            font: {
                family: 'TisaPro',
                size: 14,
                color: text
            }
        },
        yaxis: {
            font: {
                family: 'TisaPro',
                size: 8,
                color: text
            }
        }
    }


    var grafico3 = [{
        x: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        y: [15657868.07, 55294828.5, 7232355.3, 60323597.49, 88764641.24, 170571, 8000, 2801977.97, 6315244.07, 81543,47],
        type: 'scatter',
        autosize: true,
        line: {
            color: celeste,
            width: 4
        },
        marker: {
            color: red,
            size: 10
        }
    }];

    grafico3_layout = {
        //title: {
            text: 'Años de bonanza',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },
        autosize: true,
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
    }

    Plotly.newPlot('grafico1', grafico1, grafico1_layout, { responsive: true, displayModeBar: false });

    Plotly.newPlot('grafico2', grafico2, grafico2_layout, { responsive: true, displayModeBar: false });

});
*/


let celeste = '#4CC4CE';
let cian = '#2CBEC9';
let red = '#EE6A5A';
let gray = '#939393';
let text = '#333333';


function chart1() {

    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Categoría', 'Gastos'],
        ['Seguridad y Vigilancia', 1883677377],
        ['Equipo', 721418733.1],
        ['Cámaras de Video CCT', 586014321.1],
        ['Armas y Municiones', 137988426.7],
        ['Consultorías y Servicios', 632722.84]
    ]);

    var options = {
        //title: '¿En qué se gasta más?',
        bars: 'vertical',
        chartArea: {
            width: '100%',
            height: '90%'
        },
        series: { 0: { color: celeste } },
        legend: { position: 'none' }
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico1'));
    chart.draw(data, options);
}

/*
x: [
            'Seguridad y Vigilancia',
            'Consultorías y Servicios',
            'Equipo',
            'Cámaras de Video CCT',
            'Armas y Municiones',
        ],
        y: [194979850.5, 21760538.21, 10991501.51, 7569826.83, 1348910],
        */

function chart2() {

    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Categoría', 'Gastos'],
        ['Seguridad y Vigilancia', 194979850.5],
        ['Consultorías y Servicios', 21760538.21],
        ['Equipo', 10991501.51],
        ['Cámaras de Video CCT', 7569826.83],
        ['Armas y Municiones', 1348910]
    ]);

    var options = {
        //title: 'Las compras directas',
        bars: 'vertical',
        chartArea: {
            width: '100%',
            height: '90%'
        },
        series: { 0: { color: red } },
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

    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico2'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


/*

x: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        y: [15657868.07, 55294828.5, 7232355.3, 60323597.49, 88764641.24, 170571, 8000, 2801977.97, 6315244.07, 81543,47],
*/

function chart3() {

    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Años', 'Monto en contrataciones'],
        ['2009', 15657868.07],
        ['2010', 55294828.5],
        ['2011', 7232355.3],
        ['2012', 60323597.49],
        ['2013', 88764641.24],
        ['2014', 170571],
        ['2015', 8000],
        ['2016', 2801977.97],
        ['2017', 6315244.07],
        ['2018', 81543.47],
    ]);

    var options = {
        //title: 'Años de bonanza',
        bars: 'vertical',
        chartArea: {
            width: '100%',
            height: '90%'
        },
        series: { 0: { color: celeste } },
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

    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico3'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

/* Resize function built to avoid redraw charts multiple time while windows is resizing... specially on mobile! */
let free = true;

function redraw() {
    draw1();
    draw3();
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