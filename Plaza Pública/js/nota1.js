

$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';

    var imagen1 = [{
        x: ['Guatemala', 'El Salvador', 'Honduras', 'Nicaragua', 'Costa Rica', 'Panamá'],
        y: [3987, 3942, 4624, 381, 453, 485],
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

    imagen1_layout = {
        title: {
            text: 'Centroamérica: Muertes causadas con armas de fuego 2014',
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

    grafico1_x = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
    grafico1_y1 = [56016131.67, 124880671.6, 54692233.31, 75274309.6, 232720155.1, 390351444.3, 327975647.2, 164734312.2, 499897135.3, 677375582.8, 146424042.6, 64571172.51, 431323273, 83495469.21];
    grafico1_y2 = [0, 0, 0, 0, 15657868.07, 55294828.5, 7232355.3, 60323597.49, 88764641.24, 170571, 8000, 2801977.93, 6315244.07, 81543.47];

    var grafico1 = [
        {
            autosize: true,

            x: grafico1_x,
            y: grafico1_y1,
            type: 'bar',
            name: "Concursos",
            marker: {
                color: celeste
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        },
        {
            autosize: true,

            x: grafico1_x,
            y: grafico1_y2,
            type: 'bar',
            name: "Contrataciones directas",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/

        }
    ];

    var grafico1_layout = {
        title: {
            text: 'Contratos 2004-2008',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },
        autosize: true,
        height: 600,
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



    grafico2_x = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
    grafico2_y1 = [1124200000, 1160000000, 1288800000, 1301800000, 1634800000, 1886600000, 1972800000, 2275200000, 2347622265, 2720828434, 3092105375, 2900935861, 3251931133, 0, 0];
    grafico2_y2 = [0, 56016131.67, 124880671.6, 54692233.31, 75274309.6, 232720155.1, 390351444.3, 327975647.2, 164734312.2, 499897135.3, 677375582.8, 146424042.6, 64571172.51, 431323273, 83495469.21];
    grafico2_y3 = [0, 0, 0, 0, 0, 15657868.07, 55294828.5, 7232355.3, 60323597.49, 88764641.24, 170571, 8000, 2801977.93, 6315244.07, 81543.47];

    var grafico2 = [
        {
            autosize: true,

            x: grafico2_x,
            y: grafico2_y1,
            type: 'bar',
            name: "Presupuesto PNC",
            marker: {
                color: gray
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        },
        {
            autosize: true,

            x: grafico2_x,
            y: grafico2_y2,
            type: 'bar',
            name: "Concursos Seguridad",
            marker: {
                color: celeste
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/

        },
        {
            autosize: true,

            x: grafico2_x,
            y: grafico2_y3,
            type: 'bar',
            name: "Contrataciones Directas",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/

        }
    ];

    var grafico2_layout = {
        title: {
            text: 'Seguridad pública versus seguridad privada',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },
        autosize: true,
        height: 600,
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


    grafico3_x = [
        'CONDOR S.A.',
        'CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.',
        'CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA',
        'CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.',
        'CORPORACION POLIMAYA S.A.',
        'CUERPO PROFESIONAL DE SEGURIDAD S.A.',
        'PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.',
        'SERVICIOS DE SEGURIDAD ORION, S.A.',
        'SIS S.A.',
        'SISTEMAS GLOBALES DE SEGURIDAD S.A.',
        'SISTEMAS PROFESIONALES DE SEGURIDAD S.A.',
        'STAFF DE SEGURIDAD GEVAS S.A.',
        'TAURUS S.A.',
        'UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.',
        'TOTAL GENERAL'
    ];

    grafico3_y2004 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158200, 158200];
    grafico3_y2005 = [0, 0, 0, 0, 0, 0, 351456, 0, 13055205, 0, 433800, 0, 0, 0, 13840461];
    grafico3_y2006 = [0, 3379200, 0, 0, 0, 2980800, 642432, 0, 595000, 0, 0, 0, 0, 0, 7597432];
    grafico3_y2007 = [0, 3801600, 0, 0, 0, 0, 0 , 0, 7095600, 0, 0, 0, 0, 0, 10897200];
    grafico3_y2008 = [0, 0, 0, 0, 0, 0, 0, 0, 225000, 0, 0, 0, 0, 0, 225000];
    grafico3_y2009 = [0, 0, 747500, 0, 0, 0, 0, 0, 19101090, 0, 0, 0, 816750, 0, 20665340];
    grafico3_y2010 = [0, 0, 0, 0, 715000, 0, 0, 0, 0, 0, 0, 0, 2543400, 0, 3258400];
    grafico3_y2011 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 480000, 0, 0, 3445200, 0, 3925200];
    grafico3_y2012 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 171360, 78500, 0, 0, 249860];
    grafico3_y2013 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 276000, 0, 74000, 0, 350000];
    grafico3_y2014 = [267000, 0, 0, 720000, 0, 0, 0, 0, 0, 0, 276000, 0, 0, 0, 1263000];
    grafico3_y2017 = [0, 0, 0, 0, 0, 0, 0, 72000, 0, 0, 0, 0, 0, 0, 72000];
    grafico3_ytotal = [267000, 7180800, 747500, 720000, 715000, 2980800, 993888, 72000, 40071895, 480000, 1157160, 78500, 6879350, 158200, 62502093];

    var grafico3_2004 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2004,
            type: 'bar',
            name: "Año 2004",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];

    var grafico3_2005 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2005,
            type: 'bar',
            name: "Año 2005",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2006 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2006,
            type: 'bar',
            name: "Año 2006",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2007 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2007,
            type: 'bar',
            name: "Año 2007",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2008 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2008,
            type: 'bar',
            name: "Año 2008",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2009 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2009,
            type: 'bar',
            name: "Año 2009",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2010 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2010,
            type: 'bar',
            name: "Año 2010",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2011 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2011,
            type: 'bar',
            name: "Año 2011",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];

    var grafico3_2012 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2012,
            type: 'bar',
            name: "Año 2012",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];

    var grafico3_2013 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2013,
            type: 'bar',
            name: "Año 2013",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2014 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2014,
            type: 'bar',
            name: "Año 2014",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_2017 = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_y2017,
            type: 'bar',
            name: "Año 2017",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];
    var grafico3_total = [
        {
            autosize: true,

            x: grafico3_x,
            y: grafico3_ytotal,
            type: 'bar',
            name: "Total",
            marker: {
                color: red
            }
            /*text: grafico1_y.map(String),
            textposition: 'auto',
            hoverinfo: 'none'*/
        }
    ];

    var grafico3_layout = {

        autosize: true,
        height: 600,

        title: {
            text: 'Empresas con acuerdo gubernamental',
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


    var grafico4 = [
        {

            autosize: true,

            x: [
                'CONDOR S.A.',
                'CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA, S.A.',
                'SERVICIOS DE SEGURIDAD ORION, S.A.',
                'SISTEMAS PROFESIONALES DE SEGURIDAD S.A.',
                'STAFF DE SEGURIDAD GEVAS, S.A.',
                'TAURUS, S.A.'
            ],
            y: [267000, 720000, 72000, 723360, 78500, 74000],
            type: 'bar',
            width: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
            marker: {
                color: celeste
            }
        }
    ];


    var grafico4_layout = {

        autosize: true,
        height: 600,

        title: {
            text: 'Los contratistas de las empresas con acuerdo',
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

    grafico5_x = [
        'ALARMAS DE GUATEMALA, S.A.',
        'ALFA UNO, S.A',
        'BLACKTHORNE SECURITY, S.A.',
        'CORPORACION DE SEGURIDAD COMANDO SUR, S.A.',
        'EMPRESA DE SEGURIDAD PARTICULAR ELITE, S.A.',
        'GRUPO ESCORPION, S.A.',
        'ORANIZACIÓN DE SISTEMAS DE SEGURIDAD INTEGRAL E INVESTIGACIONES, S.A.',
        'PROTECCION METROPOLITANA, S.A.',
        'PROTECCION TOTAL, S.A.',
        'SAFARI SEGURIDAD, S.A.',
        'SECURITY PROFESSIONAL SYSTEMS, S.A.',
        'SEGURIDAD 2614, S.A.',
        'SERVICIO DE SEGURIDAD INTEGRAL, S.A.',
        'SISTEMAS DE SEGURIDAD',
        'VIGILANCIA Y SEGURIDAD EMPRESARIAL DE GUATEMALA'
    ];
    var grafico5 = [
        {
            autosize: true,

            x: grafico5_x,
            y: [2, 1, 1, 1, 2, 5, 1, 1, 2, 3, 3, 1, 13, 1, 1],
            type: 'bar',
            name: "Sí",
            marker: {
                color: celeste
            },
            hoverinfo: 'x+y'
        },
        {
            autosize: true,

            x: grafico5_x,
            y: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            type: 'bar',
            name: 'Sí, y más con mismos apellidos',
            marker: {
                color: red
            },
            hoverinfo: 'x+y'
        }
    ];

    var grafico5_layout = {

        autosize: true,
        height: 500,
        barmode: 'stack',

        title: {
            text: 'Empresas con militares',
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


    Plotly.newPlot('imagen1', imagen1, imagen1_layout, { responsive: true, displayModeBar: false });

    Plotly.newPlot('grafico1', grafico1, grafico1_layout, { responsive: true, displayModeBar: false });

    Plotly.newPlot('grafico2', grafico2, grafico2_layout, { responsive: true, displayModeBar: false });

    // Graficos 3 en landing

    Plotly.newPlot('grafico3_2004', grafico3_2004, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2005', grafico3_2005, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2006', grafico3_2006, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2007', grafico3_2007, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2008', grafico3_2008, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2009', grafico3_2009, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2010', grafico3_2010, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2011', grafico3_2011, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2012', grafico3_2012, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2013', grafico3_2013, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2014', grafico3_2014, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_2017', grafico3_2017, grafico3_layout, { responsive: true, displayModeBar: false });
    Plotly.newPlot('grafico3_total', grafico3_total, grafico3_layout, { responsive: true, displayModeBar: false });


    Plotly.newPlot('grafico4', grafico4, grafico4_layout, { responsive: true, displayModeBar: false });

    Plotly.newPlot('grafico5', grafico5, grafico5_layout, { responsive: true, displayModeBar: false });


});