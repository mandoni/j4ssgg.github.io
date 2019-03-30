
/*
$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';


    var grafico1 = [{
        y: [
            'GRUPO ESCORPION S.A..',
            'PROTECCION TOTAL S.A..',
            'VIGILANCIA Y SEGURIDAD EMPRESARIAL DE GUATEMALA (VISEGUA) S.A..',
            'ALARMAS DE GUATEMALA S.A..',
            'SEGURIDAD Y VIGILANCIA EL EBANO S.A..',
            'SECURITY PROFESSIONAL SYSTEMS S.A..',
            'SEGURIDAD 2614 S.A..',
            'LA SEGURIDAD DE GUATEMALA S.A..',
            'SERVICIOS DE SEGURIDAD INTEGRAL (OMEGA 2000) S.A..',
            'PROTECCION METROPOLITANA S.A..',
            'INVESTIGACIONES Y SEGURIDAD PROFESIONAL (ISP) S.A..',
            'ORGANIZACION DE SISTEMAS... (DELTA NUEVE) S.A..',
            'GRUPO ESCORPION S.A.. A TRAVES DE SU REPRESENTANTE LEGAL',
            'SAFARI SEGURIDAD S.A..',
            'SEGURIDAD Y VIGILANCIA EL EBANO S.A..',
            'RUDY VALIENTE GUZMAN',
            'JULIO RAUL ALVARADO PORRES',
            'ROBERTO MAURICIO MIRALLES GONZALEZ',
            'ENRIQUE ABEREL RODRIGUEZ FIGUEROA',
            'EMPRESA DE SEGURIDAD PARTICULAR ELITE S.A..',
            'ROSA EDVEL ORELLANA ALARCON'
        ],
        x: [613, 367, 356, 184, 172, 148, 119, 115, 86, 72, 63, 54, 53, 48, 44, 41, 29, 28, 27, 26, 25],
        type: 'bar',
        orientation: 'h',
        autosize: true,
        width: 0.9,
        marker: {
            color: celeste
        }
    }];

    grafico1_layout = {
        margin:{
            l:450
        },
        title: {
            text: 'Las más denunciadas',
            font: {
                family: 'Pluto Bold',
                size: 18,
                color: text
            }
        },
        autosize: true,
        height: 600,
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

    Plotly.newPlot('grafico1', grafico1, grafico1_layout, { responsive: true, displayModeBar: false });

});*/

let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';

function chart1() {

    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Entidad', 'Denuncias'],
        ['GRUPO ESCORPION, S.A.', 613],
        ['PROTECCION TOTAL, S.A.', 367],
        ['VIGILANCIA Y SEGURIDAD EMPRESARIAL DE GUATEMALA (VISEGUA), S.A.', 356],
        ['ALARMAS DE GUATEMALA, S.A.', 184],
        ['SEGURIDAD Y VIGILANCIA EL EBANO, S.A.', 172],
        ['SECURITY PROFESSIONAL SYSTEMS, S.A.', 148],
        ['SEGURIDAD 2614, S.A.', 119],
        ['LA SEGURIDAD DE GUATEMALA, S.A.', 115],
        ['SERVICIOS DE SEGURIDAD INTEGRAL (OMEGA 2000), S.A.', 86],
        ['PROTECCION METROPOLITANA, S.A.', 72],
        ['INVESTIGACIONES Y SEGURIDAD PROFESIONAL (ISP), S.A.', 63],
        ['DELTA NUEVE, S.A.', 54],
        ['GRUPO ESCORPION, S.A.', 53],
        ['SAFARI SEGURIDAD, S.A.', 48],
        ['SEGURIDAD Y VIGILANCIA EL EBANO', 44],
        ['RUDY VALIENTE GUZMAN', 41],
        ['JULIO RAUL ALVARADO PORRES', 29],
        ['ROBERTO MAURICIO MIRALLES GONZALEZ', 28],
        ['ENRIQUE ABEREL RODRIGUEZ FIGUEROA', 27],
        ['EMPRESA DE SEGURIDAD PARTICULAR ELITE, S.A.', 26],
        ['ROSA EDVEL ORELLANA ALARCON', 25],
        ['VISEGUA,', 24],
        ['JUAN FEDERICO GUSTAVO SARAVIA AGUIRRE', 23],
        ['SAFARI SHOOTING SERVICIOS Y SISTEMAS DE SEGURIDAD, S.A.', 22],
        ['PROTECCION TECNICA, S.A.', 22],
        ['FLOR DE MARIA HERNANDEZ CATALAN', 21],
        ['HUGO RICARDO ALVARADO CHAVEZ', 18],
        ['EDDIE WALTER SEMPE CUSTODIO', 15],
        ['SERVICIOS DE SEGURIDAD INTEGRAL (OMEGA 2000), S.A. ', 14],
        ['PROTECCION ELECTRONICA, S.A.', 13],
        ['SECURITY PROFESSIONAL SYSTEMS, S.A.', 13],
        ['ACSEL MOISES URIZAR CABRERA', 11],
        ['WERNER FRANCISCO HERRERA ALVARADO', 10],
        ['ALARMAS DE GUATEMALA, S.A.', 10]
    ]);

    var options = {
        title: 'Las más denunciadas',
        bars: 'horizontal',
        series: { 0: { color: celeste } },
        legend: { position: 'none' },
        height: 800
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico1'));
    chart.draw(data, options);
}