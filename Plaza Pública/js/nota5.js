$(function () {

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

        title: {
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
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }

        
    ];

    var grafico2_layout = {

        autosize: true,
        height: 600,

        title: {
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

});