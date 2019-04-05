let celeste = '#4CC4CE';
let cian = '#2CBEC9';
let red = '#EE6A5A';
let gray = '#939393';
let text = '#333333';
let chocolate = '#1a1a1a';
let rose = '#f3cfce';
let brown = '#7c2902';
let ocean = '#02737c';

function image1() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Paises', 'Muertes'],
        ['Guatemala', 3987],
        ['Honduras', 3942],
        ['El Salvador', 4624],
        ['Nicaragua', 381],
        ['Costa Rica', 453],
        ['Panamá', 485]

    ]);

    var options = {
        chart: {
            //title: 'Centroamérica: Muertes causadas con armas de fuego 2014'
        },
        lineWidth: 5,
        legend: { position: 'none' },
        chartArea: {
            width: '80%',
            height: '80%'
        },
        vAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 16
            }
        },
        hAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 16
            }
        },
        series: { 0: { color: red } },
        tooltip: { isHtml: true },
        height: 400
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('imagen1'));
    chart.draw(data,  google.charts.Bar.convertOptions(options));
}


function chart1() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Concursos', 'Contrataciones directas'],
        ['2005', 56016131.67, 0],
        ['2006', 124880671.6, 0],
        ['2007', 54692233.31, 0],
        ['2008', 75274309.6, 0],
        ['2009', 232720155.1, 15657868.07],
        ['2010', 390351444.3, 55294828.5],
        ['2011', 327975647.2, 7232355.3],
        ['2012', 164734312.2, 60323597.49],
        ['2013', 499897135.3, 88764641.24],
        ['2014', 677375582.8, 170571],
        ['2015', 146424042.6, 8000],
        ['2016', 64571172.51, 2801977.93],
        ['2017', 431323273, 6315244.07],
        ['2018', 83495469.21, 81543.47]
    ]);

    var options = {
        chart: {
            //title: 'Contratos 2004-2008'
        },

        chartArea: {
            width: '100%',
            height: '90%'
        },
        legend: { position: 'none' },
        vAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 16
            }
        },
        hAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 16
            }
        },
        bars: 'horizontal',
        series: { 0: { color: celeste }, 1: { color: red } },
        tooltip: { isHtml: true },
        bar: { groupWidth: 75 },
        height: 800

    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico1'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}




function chart2() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Presupuesto PNC', 'Concursos', 'Contrataciones directas'],
        ['2004', 1124200000, 0, 0],
        ['2005', 1160000000, 56016131.67, 0],
        ['2006', 1288800000, 124880671.6, 0],
        ['2007', 1301800000, 54692233.31, 0],
        ['2008', 1634800000, 75274309.6, 0],
        ['2009', 1886600000, 232720155.1, 15657868.07],
        ['2010', 1972800000, 390351444.3, 55294828.5],
        ['2011', 2275200000, 327975647.2, 7232355.3],
        ['2012', 2347622265, 164734312.2, 60323597.49],
        ['2013', 2720828434, 499897135.3, 88764641.24],
        ['2014', 3092105375, 677375582.8, 170571],
        ['2015', 2900935861, 146424042.6, 8000],
        ['2016', 3251931133, 64571172.51, 2801977.93],
        ['2017', 0, 431323273, 6315244.07],
        ['2018', 0, 83495469.21, 81543.47]
    ]);

    var options = {
        chart: {
            //title: 'Seguridad pública versus seguridad privada'
        },

        chartArea: {
            width: '100%',
            height: '90%'
        },
        legend: { position: 'none' },
        vAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 16
            }
        },
        hAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 16
            }
        },
        bars: 'horizontal',
        series: { 0: { color: celeste }, 1: { color: red }, 2: { color: ocean } },
        tooltip: { isHtml: true },
        bar: { groupWidth: 85 },
        height: 1000
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico2'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

//grafico3_y2004 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158200, 158200];


let grafico3_options = {
    backgroundColor: {
        fillOpacity: 0
    },
    legend: {
        textStyle:
        {
            color: text,
            fontName: 'Tisa Pro',
            fontSize: 12
        }
    },
    chartArea: {
        width: '100%',
        height: '90%'
    },
    height: 400,
    tooltip: { isHtml: true },
    colors: [celeste, red, ocean, brown],
    pieSliceText: 'percentage',
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
    }
};


function grafico3_2004() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 0],*/
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 158200]
    ]);



    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2004'));
    chart.draw(data, grafico3_options);
}


function grafico3_2005() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 351456],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 13055205],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 433800]
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);


    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2005'));
    chart.draw(data, grafico3_options);
}

//grafico3_y2006 = [0, 3379200, 0, 0, 0, 2980800, 642432, 0, 595000, 0, 0, 0, 0, 0, 7597432];

function grafico3_2006() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 3379200],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 2980800],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 642432],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 595000]
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2006'));
    chart.draw(data, grafico3_options);
}

function grafico3_2007() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 3801600],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 7095600]
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2007'));
    chart.draw(data, grafico3_options);
}

function grafico3_2008() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 225000],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2008'));
    chart.draw(data, grafico3_options);
}

function grafico3_2009() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 747500],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        //['SIS S.A.', 19101090],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 816750]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2009'));
    chart.draw(data, grafico3_options);
}

function grafico3_2010() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        //['CONDOR S.A.', 0],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 715000],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        //['SIS S.A.', 0],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 2543400]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2010'));
    chart.draw(data, grafico3_options);
}

function grafico3_2011() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],*/
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 480000],
        //['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 3445200]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2011'));
    chart.draw(data, grafico3_options);
}

function grafico3_2012() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],*/
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 171360],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 78500]
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2012'));
    chart.draw(data, grafico3_options);
}

function grafico3_2013() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        ['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],*/
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 276000],
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 74000]
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2013'));
    chart.draw(data, grafico3_options);
}

function grafico3_2014() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        ['CONDOR S.A.', 267000],
        //['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        //['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 720000],
        //['CORPORACION POLIMAYA S.A.', 0],
        //['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        //['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],
        //['SERVICIOS DE SEGURIDAD ORION, S.A.', 0],
        //['SIS S.A.', 0],
        //['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 276000]
        //['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        //['TAURUS S.A.', 0],
        //['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2014'));
    chart.draw(data, grafico3_options);
}

function grafico3_2017() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresa', 'Contratos'],
        /*['CONDOR S.A.', 0],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 0],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 0],
        ['CORPORACION POLIMAYA S.A.', 0],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 0],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 0],*/
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 72000]
        /*['SIS S.A.', 0],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 0],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 0],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 0],
        ['TAURUS S.A.', 0],
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 0]*/
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('grafico3_2017'));
    chart.draw(data, grafico3_options);
}


function grafico3_total() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresas', 'Contratos'],
        ['CONDOR S.A.', 267000],
        ['CONSULTORES DE SEGURIDAD Y VIGILANCIA S.A.', 7180800],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA', 747500],
        ['CORPORACION DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 720000],
        ['CORPORACION POLIMAYA S.A.', 715000],
        ['CUERPO PROFESIONAL DE SEGURIDAD S.A.', 2980800],
        ['PROFESIONALES DE SERVICIOS DE SEGURIDAD S.A.', 993888],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 72000],
        ['SIS S.A.', 40071895],
        ['SISTEMAS GLOBALES DE SEGURIDAD S.A.', 480000],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 1157160],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 78500],
        ['TAURUS S.A.', 6879350],
        ['UNIDAD DE SEGURIDAD Y SERVICIOS INTEGRALES S.A.', 158200]
    ]);


    options = {
        backgroundColor: {
            fillOpacity: 0
        },
        legend: {
            position: 'none',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        chartArea: {
            width: '90%',
            height: '90%'
        },
        sliceVisibilityThreshold: 0.03,
        pieSliceText: 'value',
        height: 400,
        pieHole: .4,
        tooltip: { isHtml: true },
        vAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        hAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
	bars: 'vertical',
        series: { 0: { color: celeste } }
    };

    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico3_total'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}



function chart4() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresas', 'Contratos'],
        ['CONDOR S.A.', 267000],
        ['STAFF DE SEGURIDAD GEVAS S.A.', 78500],
        ['SISTEMAS PROFESIONALES DE SEGURIDAD S.A.', 723360],
        ['SERVICIOS DE SEGURIDAD ORION, S.A.', 72000],
        ['TAURUS S.A.', 74000],
        ['CORP. DE SISTEMA ORGANIZADO DE VIGILANCIA S.A.', 720000]
    ]);


    options = {
        chart: {
            //title: 'Los contratistas de las empresas con acuerdo'
        },
        legend: { position: 'none' },
        vAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        hAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        bars: 'vertical',
        series: { 0: { color: celeste } },
        tooltip: { isHtml: true },
        height: 370
    };
    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico4'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


function chart5() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Empresas', 'Sí', 'Sí, y más con mismos apellidos'],    
        ['ALFA UNO, S.A', 1, 0],
        ['ALARMAS DE GUATEMALA, S.A.', 2, 1],
        ['BLACKTHORNE SECURITY, S.A.', 1, 0],
        ['CORPORACION DE SEGURIDAD COMANDO SUR, S.A.', 1, 0],
        ['EMPRESA DE SEGURIDAD PARTICULAR ELITE, S.A.', 2, 0],
        ['GRUPO ESCORPION, S.A.', 5, 0],
        ['ORANIZACIÓN DE SISTEMAS DE SEGURIDAD INTEGRAL E INVESTIGACIONES, S.A.', 1, 0],
        ['PROTECCION METROPOLITANA, S.A.', 1, 0],
        ['PROTECCION TOTAL, S.A.', 2, 0],
        ['SAFARI SEGURIDAD, S.A.', 3, 0],
        ['SECURITY PROFESSIONAL SYSTEMS, S.A.', 3, 0],
        ['SISTEMAS DE SEGURIDAD', 1, 0],
        ['SERVICIO DE SEGURIDAD INTEGRAL, S.A.', 13, 1],
        ['VIGILANCIA Y SEGURIDAD EMPRESARIAL DE GUATEMALA', 1, 0],
        ['SEGURIDAD 2614, S.A.', 1, 0]
    ]);


    options = {
        chart: {
            //title: 'Los contratistas de las empresas con acuerdo',
        },
        legend: {
            position: 'none',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        chartArea: {
            width: '90%',
            height: '90%'
        },
        pieSliceText: 'value',
        pieHole: 0.4,
        tooltip: { isHtml: true },
        vAxis: {
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        hAxis: {
            title: '',
            textStyle:
            {
                color: text,
                fontName: 'Tisa Pro',
                fontSize: 12
            }
        },
        height: 400,
	bars: 'vertical',
	series: { 0: { color: celeste }, 1: { color: red} }

    };
    // Instantiate and draw the chart.
    var chart = new google.charts.Bar(document.getElementById('grafico5'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


/* Resize function built to avoid redraw charts multiple time while windows is resizing... specially on mobile! */
let free = true;

function redraw() {
    draw1();
    draw2();
    draw3();
    draw41();
    draw42();
    draw43();
    draw44();
    draw45();
    draw46();
    draw47();
    draw41();
    draw48();
    draw49();
    draw410();
    draw411();
    draw412();
    draw413();
    draw5();
    draw6();
}

$(window).resize(function () {
    if (free) {
        free = false;
        setTimeout(function () {
            redraw();
            free = true
        }, 1000);
    }
});


$(document).ready(redraw);