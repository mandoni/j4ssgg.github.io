$(document).ready(function () {

    var grafico1 = [{
        x: ['2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'],
        y: [15657868.07, 55294828.5, 7232355.3, 60323597.49, 88764641.24, 170571, 8000, 2801977.93, 6315244.07, 81543.47],
        type: 'scatter',
        line: {
            color: '#4CC4CE',
            width: 4
        },
        marker: {
            color: '#2CBEC9',
            size: 10
        }
    }];



    Plotly.newPlot('grafico1', grafico1, { title: 'Año VS Monto CD' }, { responsive: true, displayModeBar: false });
    
    
});