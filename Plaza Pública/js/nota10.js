
let celeste = '#4CC4CE';
let cian = '#2CBEC9';
let red = '#EE6A5A';
let gray = '#939393';
let text = '#333333';

//x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
//y: [2526, 6508, 6600, 6603, 5757, 612, 188, 83],


function chart1() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Tasa de licencias para portación', 'Tasa de licencias para tenencia'],
        ['2009', 327.8, 559.8],
        ['2010', 355.8,455.3],
        ['2011', 224.5,726.3],
        ['2012', 213.6,764.5],
        ['2013', 241.1,428.6],
        ['2014', 195.6,496.6],
        ['2015', 167.4,360.1],
        ['2016', 192.2,378.9],
        ['2017', 154.4,368.9]
    ]);

    var options = {
        bars: 'vertical',
        series: { 0: { color: celeste }, 1: {color:red} },
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
        height: 300
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico1'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

/*
//grafico2_x = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
//y: [78467,65384,106869,115243,66171,78494,58248,62707,62429,21595],

function chart2() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Permisos especiales'],
        ['2009', 78467],
        ['2010', 65384],
        ['2011', 106869],
        ['2012', 115243],
        ['2013', 66171],
        ['2014', 78494],
        ['2015', 58248],
        ['2016', 62707],
        ['2017', 62429],
        ['2018', 21595]
    ]);

    var options = {
        //title: '¿Cuántas armas legales?',
        bars: 'vertical',
        series: { 0: { color: celeste } },
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
        height: 300
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico2'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
*/

/* Resize function built to avoid redraw charts multiple time while windows is resizing... specially on mobile! */
let free = true;

function redraw() {
    draw1();
    draw2()
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