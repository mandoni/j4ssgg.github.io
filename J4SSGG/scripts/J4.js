// Simple NET project using Canvas and pure JavaScript
// author: @J4SSGG - Abraham Gutierrez
class J4 {


    /**
     * 
     * @param {string} canvasID Id of the canvas tag to insert the animation.
     * 
     * @param {Object} configuration Object with configuration values, like: dots color, dots amount, line color, etc
     * 
     */

    constructor(canvasID, configuration) {
        this.canvas = document.getElementById(canvasID);
        this.canvas.width = document.body.clientWidth; // fix to blur
        this.canvas.height = window.innerHeight; // fix to blur
        this.ctx = this.canvas.getContext("2d");

        this.width = this.canvas.width;
        this.height = this.canvas.height;


        this.dotColor = "#E8444D";
        this.lineColor = "#E8444D";

        this.showLines = true;
        this.showDots = true;

        this.dots = [];

        this.amount = 20;
        this.xVelocity = 5;
        this.yVelocity = 5;
        this.dotWidth = 4;
        this.lineWidth = 2;
        this.highestPath = 0;
        this.size = 3;

        // configurations
        if (configuration !== undefined) {
            if (configuration.dotColor !== undefined) this.dotColor = configuration.dotColor;
            if (configuration.lineColor !== undefined) this.lineColor = configuration.lineColor;

            if (configuration.lineWidth !== undefined) this.lineWidth = configuration.lineWidth;
            if (configuration.dotWidth !== undefined) this.dotWidth = configuration.dotWidth;

            if (configuration.amount !== undefined) this.amount = configuration.amount;

            if (configuration.xVelocity !== undefined) this.xVelocity = configuration.xVelocity;
            if (configuration.yVelocity !== undefined) this.yVelocity = configuration.yVelocity;

            if (configuration.showDots != undefined) this.showDots = configuration.showDots;
            if (configuration.showLines != undefined) this.showLines = configuration.showLines;

            if (configuration.size != undefined) this.size = configuration.size;
        }

        this.initialize();
    }


    initialize() {
        //clear dots array
        this.dots = [];

        //fill again
        for (var i = 0; i < this.amount; i++) {
            this.dots.push({
                id: i,
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: Math.random() * this.xVelocity * this.negativeRandom(),
                vy: Math.random() * this.yVelocity * this.negativeRandom(),
                width: this.random(1, this.dotWidth),
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
        let result = Math.sqrt((A.x - B.x) ** 2 + (A.y - B.y) ** 2 + (A.width - B.width) ** 2);
        if (this.highestPath < result) this.highestPath = result;
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

    negativeRandom() {
        return (Math.random() < 0.5 ? -1 : 1);
    }

    compare(a, b) {
        if (a.distance < b.distance) return -1;

        if (a.distance == b.distance) return 0;

        return 1;
    }

    neighbors() {
        if (this.showLines) {
            for (var i = 0; i < this.amount; i++) {
                this.dots[i].neighbors = [];
                for (var j = 0; j < this.amount; j++) {
                    let path = this.euclideanDistance(this.dots[i], this.dots[j]);
                    if (path == 0) continue;
                    this.dots[i].neighbors.push({
                        id: this.dots[j].id,
                        distance: path
                    });
                }
                this.dots[i].neighbors.sort(this.compare);
            }
        }
    }

    drawDots() {
        if (this.showDots) {
            for (var j = 0; j < this.amount; j++) {
                let dot = this.dots[j];
                this.ctx.beginPath();
                this.ctx.arc(dot.x, dot.y, dot.width, 0, Math.PI * 2, false);
                this.ctx.fillStyle = this.dotColor;
                this.ctx.fill();
            }
        }
    }

    drawLines(K) {
        if (this.showLines) {
            for (var j = 0; j < this.amount; j++) {
                let dot = this.dots[j];
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.lineColor;

                for (var i = 0; i < K; i++) {
                    let neighbor = dot.neighbors[i];
                    this.ctx.lineWidth = this.lineWidth * neighbor.distance / this.highestPath;
                    this.ctx.moveTo(dot.x, dot.y);
                    this.ctx.lineTo(this.dots[neighbor.id].x, this.dots[neighbor.id].y);
                    this.ctx.stroke();
                }
            }
        }
    }



    updatePosition() {
        for (var j = 0; j < this.amount; j++) {
            let dot = this.dots[j];

            dot.x += dot.vx;
            dot.y += dot.vy;

            if (dot.x > this.width) {
                dot.x = this.width;
                dot.vx *= -1;
            }
            if (dot.x < 0) {
                dot.x = 0;
                dot.vx *= -1;
            }
            if (dot.y > this.height) {
                dot.y = this.height;
                dot.vy *= -1;
            }
            if (dot.y < 0) {
                dot.y = 0;
                dot.vy *= -1;
            }
        }
    }

    clear() {
        this.canvas.width = this.width;
    }

    animation() {
        this.clear();
        this.neighbors();
        this.drawLines(this.size);
        this.drawDots();
        this.updatePosition();
    }
}