// Simple NET project using Canvas and pure JavaScript
// author: @J4SSGG - Abraham Gutierrez

let canvas;
let ctx;

let dotColor = "#E8444D";
let lineColor = "#E8444D";


let dots = [];

let amount = 200;
let width = 0;
let height = 0;
let xVelocity = 5;
let yVelocity = 5;
let dotWidth = 4;
let lineWidth = 2;
let highestPath = 0;


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
        if (configuration !== undefined) {
            dotColor = configuration.dotColor !== undefined ? configuration.dotColor: dotColor;
            lineColor = configuration.lineColor !== undefined ? configuration.lineColor : lineColor;
            lineWidth = configuration.lineWidth !== undefined ? configuration.lineWidth : lineWidth;
            dotWidth = configuration.dotWidth !== undefined ? configuration.dotWidth : dotWidth;

            amount = configuration.amount !== undefined ? configuration.amount : amount;

            xVelocity = configuration.xVelocity !== undefined ? configuration.xVelocity:xVelocity;
            yVelocity = configuration.yVelocity !== undefined ? configuration.yVelocity:yVelocity;
        }

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
                vx: Math.random() * xVelocity,
                vy: Math.random() * yVelocity,
                width: this.random(1, dotWidth),
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
        let result = Math.sqrt((A.x - B.x) ** 2 + (A.y - B.y) ** 2 + (A.width- B.width) ** 2);
        if (highestPath < result) highestPath = result;
        return result;
    }


    /**
     * 
     * @param {number} min lowest value (inclusive) generated.
     * @param {number} max highest value (exclusive) generated.
     */

    random(min, max) {
        return Math.random() * (max - min) + min;;
    }

    compare(a, b) {
        if (a.distance < b.distance) return -1;

        if (a.distance == b.distance) return 0;

        return 1;
    }

    neighbors() {
        for (var i = 0; i < amount; i++) {
            dots[i].neighbors = [];
            for (var j = 0; j < amount; j++) {
                let path = this.euclideanDistance(dots[i], dots[j]);
                if(path == 0) continue;
                dots[i].neighbors.push(
                    {
                        id: dots[j].id,
                        distance: path
                    }
                );
            }
            dots[i].neighbors.sort(this.compare);
        }
    }

    drawDots() {
        dots.forEach(function (dot) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.width, 0, Math.PI * 2, false);
            ctx.fillStyle = dotColor;
            ctx.fill();
        });
    }

    drawLines(K) {
        this.neighbors();
        dots.forEach(function (dot) {

            ctx.beginPath();
            ctx.strokeStyle = lineColor;

            dot.neighbors.slice(0, K).forEach(function (neighbor) {
                ctx.lineWidth = 2 * neighbor.distance / highestPath;
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(dots[neighbor.id].x, dots[neighbor.id].y);
                ctx.stroke();
            });
        });
    }

    draw() {
        return Promise.all([ctx.clearRect(0, 0, width, height),
        this.drawLines(5), this.drawDots()]);
    }
}
