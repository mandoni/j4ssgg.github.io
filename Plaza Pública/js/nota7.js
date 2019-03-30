/*$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';


    grafico1_x = ['2009', '2010', '2011', '2012', '2013', '2017'];

    var grafico1 = [
        {
            autosize: true,
            x: grafico1_x,
            y: [1245948,88035291,13393720,453969463,511265775,193677857],
            type: 'bar',
            marker: {
                color: celeste
            }
        }
    ];

    var grafico1_layout = {

        autosize: true,
        height: 500,
        barmode: 'stack',

        title: {
            text: 'Por fuera del límite',
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
    
});*/


let celeste = '#4CC4CE';
let cian = '#2CBEC9';
let red = '#EE6A5A';
let gray = '#939393';
let text = '#333333';

function drawChart() {
    
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Dato'],
        ['2009', 1245948],
        ['2010', 88035291],
        ['2011', 13393720],
        ['2012', 453969463],
        ['2013', 511265775],
        ['2017', 193677857]
    ]);

    var options = {
        title: 'Por fuera del límite', 
        titleTextStyle: {
            family: 'Pluto Bold',
            size: 18,
            color: text
        }, 
        bars: 'vertical',
        series: { 0: {color: celeste} }
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico1'));
    chart.draw(data, options);
}



