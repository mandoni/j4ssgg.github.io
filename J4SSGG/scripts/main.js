// Only load main functions when document is ready :D

$(document).ready(function(){

    // main Time object

    

    /**
     * 
     * @param {number} element jQuery span object
     * 
     * 
     */
    function setTimeInto(element){
        element.html(getTime());
    }



    /**
     * @param {Object} clock a new instance of Date();
     * @returns {string} with time in HH:MM:SS format
     */
    function getTime(){
        
        return (new Date()).toLocaleTimeString();
    }



    // Update time every second 
    window.setInterval(setTimeInto, 1000, $("#time"));
    


    // Insert particles animation

    particles = new J4("particles", false);
    particles.draw();
});