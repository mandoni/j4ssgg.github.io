/*$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';

    var grafico1 = [
        {
            autosize: true,
            x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
            y: [2526, 6508, 6600, 6603, 5757, 612, 188, 83],
            type: 'bar',
            marker:{
                color: celeste,
                width: 0.9
            }
        }
    ];

    var grafico1_layout = {

        autosize: true,
        height: 500,
        title: {
            text: 'Permisos especiales frecuentes',
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


    grafico2_x = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

    var grafico2 = [
        {
            autosize: true,
            x: grafico2_x,
            y: [78467,65384,106869,115243,66171,78494,58248,62707,62429,21595],
            type: 'bar',
            marker:{
                color: celeste,
                width: 0.9
            }
        }
    ];

    var grafico2_layout = {

        autosize: true,
        height: 500,

        title: {
            text: '¿Cuántas armas legales?',
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

    Plotly.newPlot('grafico1', grafico1, grafico1_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico2', grafico2, grafico2_layout, { responsive: true, displayModeBar: false });

});*/

let celeste = '#4CC4CE';
let cian = '#2CBEC9';
let red = '#EE6A5A';
let gray = '#939393';
let text = '#333333';

//x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
//y: [2526, 6508, 6600, 6603, 5757, 612, 188, 83],


function chart1(){
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Permisos emitidos'],
        ['2011', 2526],
        ['2012', 6508],
        ['2013', 6600],
        ['2014', 6603],
        ['2015', 5757],
        ['2016', 612],
        ['2017', 188],
        ['2018', 83]
    ]);

    var options = {
        title: 'Permisos especiales frecuentes', 
        titleTextStyle: {
            family: 'Pluto Bold',
            size: 18,
            color: text
        }, 
        bars: 'vertical',
        series: { 0: {color: celeste} },
        legend: {position:'none'},
        height: 300
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico1'));
    chart.draw(data, options);
}


//grafico2_x = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
//y: [78467,65384,106869,115243,66171,78494,58248,62707,62429,21595],

function chart2(){
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
        title: '¿Cuántas armas legales?', 
        titleTextStyle: {
            family: 'Pluto Bold',
            size: 18,
            color: text
        }, 
        bars: 'vertical',
        series: { 0: {color: red} },
        legend: {position:'none'},
        height: 300
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico2'));
    chart.draw(data, options);
}