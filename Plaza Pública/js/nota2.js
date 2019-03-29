

$(function () {

    let celeste = '#4CC4CE';
    let cian = '#2CBEC9';
    let red = '#EE6A5A';
    let gray = '#939393';
    let text = '#333333';


    var grafico1 = [{
        y: [
            'GRUPO ESCORPION S.A.',
            'PROTECCION TOTAL S.A.',
            'VIGILANCIA Y SEGURIDAD EMPRESARIAL DE GUATEMALA (VISEGUA) S.A.',
            'ALARMAS DE GUATEMALA S.A.',
            'SEGURIDAD Y VIGILANCIA EL EBANO S.A.',
            'SECURITY PROFESSIONAL SYSTEMS S.A.',
            'SEGURIDAD 2614 S.A.',
            'LA SEGURIDAD DE GUATEMALA S.A.',
            'SERVICIOS DE SEGURIDAD INTEGRAL (OMEGA 2000) S.A.',
            'PROTECCION METROPOLITANA S.A.',
            'INVESTIGACIONES Y SEGURIDAD PROFESIONAL (ISP) S.A.',
            'ORGANIZACION DE SISTEMAS... (DELTA NUEVE) S.A.',
            'GRUPO ESCORPION S.A. A TRAVES DE SU REPRESENTANTE LEGAL',
            'SAFARI SEGURIDAD S.A.',
            'SEGURIDAD Y VIGILANCIA EL EBANO S.A.',
            'RUDY VALIENTE GUZMAN',
            'JULIO RAUL ALVARADO PORRES',
            'ROBERTO MAURICIO MIRALLES GONZALEZ',
            'ENRIQUE ABEREL RODRIGUEZ FIGUEROA',
            'EMPRESA DE SEGURIDAD PARTICULAR ELITE S.A.',
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

});