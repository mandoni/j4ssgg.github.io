$(document).ready(function () {

    var imagen1 = [{
        x: ['Guatemala', 'El Salvador', 'Honduras', 'Nicaragua', 'Costa Rica', 'Panamá'],
        y: [3987, 3942, 4624, 381, 453, 485],
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


    var grafico4 = [{
        x: [
            'CONDOR S.A', 
            'CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA, SOCIEDAD ANONIMA', 
            'SERVICIOS DE SEGURIDAD ORION, SOCIEDAD ANONIMA', 
            'SISTEMAS PROFESIONALES DE SEGURIDAD SOCIEDAD ANONIMA', 
            'STAFF DE SEGURIDAD GEVAS, SOCIEDAD ANONIMA', 
            'TAURUS, SOCIEDAD ANONIMA'
        ],
        y: [267000, 720000, 72000, 723360, 78500, 74000],
        type: 'bar',
        width: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        marker: {
            color: '#4CC4CE'
        }
    }];


    Plotly.newPlot('imagen1', imagen1, { title: 'Centroamérica: Muertes causadas con armas de fuego 2014' }, { responsive: true, displayModeBar: false });
    
    Plotly.newPlot('grafico4', grafico4, { xaxis: { showticklabels: false }}, { responsive: true, displayModeBar: false });

});