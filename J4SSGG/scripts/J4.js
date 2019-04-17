// Simple NET project using Canvas and pure JavaScript
// author: @J4SSGG - Abraham Gutierrez


let dotColor = "#fff";
let lineColor = "#3f206f";
let amount = 50;

let canvas;
let ctx;
let dots = [];
let width = 0;
let height = 0;

class J4 {


    /**
     * 
     * @param {string} canvasID Id of the canvas tag to insert the animation.
     * 
     * @param {Object} configuration Object with configuration values, like: dots color, dots amount, line color, etc
     * 
     */

    constructor(canvasID, configuration) {
        canvas = document.getElementById(canvasID);
        canvas.width = canvas.clientWidth; // fix to blur
        canvas.height = canvas.clientHeight; // fix to blur
        ctx = canvas.getContext("2d");

        dots = [];
        width = canvas.width;
        height = canvas.height;



        // configurations
        if (!configuration) {
            this.initialize();
            return;
        }
        dotColor = configuration.dotColor ? configuration.dotColor : dotColor;
        lineColor = configuration.lineColor ? configuration.lineColor : lineColor;
        this.initialize();
    }


    initialize() {
        //clear dots array
        dots = [];

        //fill again
        for (var i = 0; i < amount; i++) {
            dots.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: Math.random() * 10 - 5,
                vy: Math.random() * 10 - 5,
            })
        }
    }


    draw() {
        ctx.clearRect(0, 0, width, height);
        dots.forEach(function (dot) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2, false);
            ctx.fillStyle = dotColor;
            ctx.fill();
        });
    }

}
