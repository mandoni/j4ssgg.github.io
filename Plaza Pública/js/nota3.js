

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
        title: {
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
        title: {
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
        title: {
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
