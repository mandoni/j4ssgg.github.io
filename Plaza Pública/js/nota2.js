
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
        ['Grupo Escorpión, S.A.', 613],
        ['Protección Total, S.A.', 367],
        ['Vigilancia Y Seguridad Empresarial De Guatemala (VISEGUA), S.A.', 356],
        ['Alarmas De Guatemala, S.A.', 184],
        ['Seguridad Y Vigilancia El Ébano, S.A.', 172],
        ['Security Professional Systems, S.A.', 148],
        ['Seguridad 2614, S.A.', 119],
        ['La Seguridad De Guatemala, S.A.', 115],
        ['Servicios De Seguridad Integral (Omega 2000), S.A.', 86],
        ['Protección Metropolitana, S.A.', 72],
        ['Investigaciones Y Seguridad Profesional (ISP), S.A.', 63],
        ['Delta Nueve, S.A.', 54],
        ['Grupo Escorpión, S.A.', 53],
        ['Safari Seguridad, S.A.', 48],
        ['Seguridad Y Vigilancia El Ébano', 44],
        ['Rudy Valiente Guzmán', 41],
        ['Julio Raúl Alvarado Porres', 29],
        ['Roberto Mauricio Miralles González', 28],
        ['Enrique Aberel Rodriguez Figueroa', 27],
        ['Empresa De Seguridad Particular Elite, S.A.', 26],
        ['Rosa Edvel Orellana Alarcón', 25],
        ['VISEGUA,', 24],
        ['Juan Federico Gustavo Saravia Aguirre', 23],
        ['Safari Shooting Servicios Y Sistemas De Seguridad, S.A.', 22],
        ['Protección Técnica, S.A.', 22],
        ['Flor De María Hernández Catalán', 21],
        ['Hugo Ricardo Alvarado Chávez', 18],
        ['Eddie Walter Sempe Custodio', 15],
        ['Servicios De Seguridad Integral (Omega 2000), S.A. ', 14],
        ['Protección Electrónica, S.A.', 13],
        ['Security Professional Systems, S.A.', 13],
        ['Acsel Moises Urizar Cabrera', 11],
        ['Werner Francisco Herrera Alvarado', 10],
        ['Alarmas De Guatemala, S.A.', 10]
    ]);

    var options = {
        //title: 'Las más denunciadas',
        height: 600,
        tooltip: { isHtml: true },
        //bars: 'horizontal',
        //series: { 0: { color: celeste } },
        legend: { position: 'none'},
        vAxis: {
            textStyle:
                {
                    color: text,
                    fontName: 'Tisa Pro',
                    fontSize: 16
                }
        },
        hAxis: {
            textStyle:
                {
                    color: text,
                    fontName: 'Tisa Pro',
                    fontSize: 16
                }
        },
        pieSliceText: 'value'
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico1'));
    chart.draw(data, (options));
}