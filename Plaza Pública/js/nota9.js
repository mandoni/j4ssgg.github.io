$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';

    /*
        grafico1_x = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
        var grafico1 = [
            {
                autosize: true,
                x: grafico1_x,
                y: [0, 0, 0, 0, 0, 0, 0, 446, 432, 518, 540, 590, 2526],
                type: 'bar',
                name: '2011'
            },
            {
                autosize: true,
                x: grafico1_x,
                y: [569, 587, 554, 377, 568, 478, 543, 591, 455, 624, 622, 540, 6508],
                type: 'bar',
                name: '2012'
            },
            {
                autosize: true,
                x: grafico1_x,
                y: [755, 553, 512, 509, 588, 459, 522, 644, 538, 562, 489, 469, 6600],
                type: 'bar',
                name: '2013'
            },
            {
                autosize: true,
                x: grafico1_x,
                y: [634, 642, 595, 410, 424, 611, 585, 554, 554, 549, 494, 551, 6603],
                type: 'bar',
                name: '2014'
            },
            {
                autosize: true,
                x: grafico1_x,
                y: [530, 557, 605, 582, 411, 469, 624, 546, 472, 660, 191, 110, 5757],
                type: 'bar',
                name: '2015'
            },
            {
                autosize: true,
                x: grafico1_x,
                y: [176, 42, 109, 38, 28, 41, 29, 39, 32, 15, 44, 19, 612],
                type: 'bar',
                name: '2016'
            },
            {
                autosize: true,
                x: grafico1_x,
                y: [19, 14, 7, 12, 21, 31, 15, 8, 16, 5, 14, 26, 188],
                type: 'bar',
                name: '2017'
            },
            {
                autosize: true,
                x: grafico1_x,
                y: [29, 10, 15, 29, 0, 0, 0, 0, 0, 0, 0, 0, 83],
                type: 'bar',
                name: '2018'
            }
        ];
    */

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

});