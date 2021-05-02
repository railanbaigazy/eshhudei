//circle moving of the banner background gradient
$(document).ready(function() {

    var degrees = 90, 
        timer = setInterval(function() {

            degrees++;
            $('.banner-section').css('background', 'linear-gradient(' + degrees + 'deg, rgba(39,204,112,1) 0%, rgba(127,214,41,1) 100%');
            $('.banner-section').css('background', '-moz-linear-gradient(' + degrees + 'deg, rgba(39,204,112,1) 0%, rgba(127,214,41,1) 100%');
            $('.banner-section').css('background', '-webkit-linear-gradient(' + degrees + 'deg, rgba(39,204,112,1) 0%, rgba(127,214,41,1) 100%');

        }, 10000 / 360);
        
});

