// Simple NET project using Canvas and pure JavaScript
// author: @J4SSGG - Abraham Gutierrez

let canvas;
let ctx;

let dotColor = "#E8444D";
let lineColor = "#E8444D";


let dots = [];

let amount = 90;
let width = 0;
let height = 0;
let xV = 5;
let yV = 5;
let size = 4;

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
        canvas.width = document.body.clientWidth; // fix to blur
        canvas.height = window.innerHeight; // fix to blur
        ctx = canvas.getContext("2d");

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
                id: i,
                x: Math.random() * width,
                y: Math.random() * height,
                vx: Math.random() * xV,
                vy: Math.random() * yV,
                size: this.random(1, size),
                neighbors: []
            })
        }
    }


    /**
     * 
     * @param {Object} A one dot object with x,y coordinates
     * @param {Object} B one dot object with x,y coordinates
     * @returns {number} 
     */
    euclideanDistance(A, B) {
        return Math.sqrt((A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y));
    }


    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    compare(a, b) {
        if (a.distance < b.distance) {
            return -1;

        }

        if (a.distance == b.distance) {
            return 0;
        }

        return 1;
    }

    /**
     * 
     * @param {number} K number of neighbors considered
     * 
     */
    neighbors(K) {
        for (var i = 0; i < amount; i++) {
            dots[i].neighbors = [];
            for (var j = i + 1; j < amount; j++) {
                dots[i].neighbors.push(
                    {
                        id: j,
                        distance: this.euclideanDistance(dots[i], dots[j])
                    }
                );
            }
            dots[i].neighbors = dots[i].neighbors.sort(this.compare).slice(0, K);
        }
    }

    drawDots() {
        dots.forEach(function (dot) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2, false);
            ctx.fillStyle = dotColor;
            ctx.fill();
        });
    }

    drawLines() {
        this.neighbors(4);
        dots.forEach(function (dot) {

            ctx.beginPath();
            ctx.strokeStyle = lineColor;

            dot.neighbors.forEach(function (neighbor) {
                ctx.lineWidth = 0.25 - 1 / neighbor.distance;
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(dots[neighbor.id].x, dots[neighbor.id].y);
                ctx.stroke();
            });
        });
    }

    draw() {
        return Promise.all([ctx.clearRect(0, 0, width, height),
        this.drawLines(), this.drawDots()]);
    }
}
