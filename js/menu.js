var left = 0;
var timer;
var sliderTrack = $('.menu-slider-track');

//sliding the track to the left
$('.menu-slider-right').bind('click', function () {
    left = left - 100;
    if ( left < -300 ) {
        left = 0;
    }
    for(var i=0; i<sliderTrack.length; i++)sliderTrack[i].style.left = left + '%';
});
//sliding the track to the right
$('.menu-slider-left').bind('click', function () {
    if ( left != 0 ) {
    left = left + 100;
    }
    if ( left < -300 ) {
        left = 0;
    }
    for(var i=0; i<sliderTrack.length; i++)sliderTrack[i].style.left = left + '%';
});

autoSlider();

//sliding photos-track
function autoSlider() {
    timer = setInterval(function() {
        left = left - 100;
        //auto-sliding photos-track each 10 sec
        if ( left < -300 ) {
            left = 0;
        }
        for(var i=0; i<sliderTrack.length; i++)sliderTrack[i].style.left = left + '%';  
    }, 10000);
}