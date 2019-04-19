// Only load main functions when document is ready :D

$(document).ready(function () {

    // main Time object



    /**
     * 
     * @param {number} element jQuery span object
     * 
     * 
     */
    function setTimeInto(element) {
        element.html(getTime());
    }



    /**
     * @param {Object} clock a new instance of Date();
     * @returns {string} with time in HH:MM:SS format
     */
    function getTime() {

        return (new Date()).toLocaleTimeString();
    }



    // Update time every second 
    window.setInterval(setTimeInto, 1000, $("#time"));



    // Insert particles animation

    particles = new J4("particles",
        {
            amount: 100,
            xVelocity: 0.1,
            yVelocity: -0.1,
            dotColor: "#BBC0B8",
            lineColor: "#8B8F89",
            dotWidth: 4,
            lineWidth: 3,
            showLines: true,
            showDots: true,
            size: 3
        });

    function animate() {
        particles.animation();
    }
    
    window.setInterval(animate, 1000 / 60);
});