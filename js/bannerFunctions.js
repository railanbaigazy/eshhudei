//toggling(changing) text overall function
$.fn.toggleText = function(t1, t2, t3){
    if (this.text() == t1) { 
        this.text(t2);
    }
    else if (this.text() == t2) {
        this.text(t3);
    }
    else {
        this.text(t1);
    }
    return this;
};

$(document).ready(function () {
    
    var changingHeading = $('.banner-changing-heading');

    //toggling(changing) text each 4 sec
    if (!changingHeading.hasClass('ready')) {
        changingHeading.addClass('ready');
        setInterval( function() {
            changingHeading.toggleText('Худей легко и быстро!', 'Экономь своё время!', 'Держи себя в тонусе!');
        },
        4000
        );
    }

    var left = 0;
    var timer;
    var sliderTrack = $('.slider-track');

    //sliding the track to the left
    $('.slider-right').bind('click', function () {
        left = left - 500;
        if ( left < -2500 ) {
            left = 0;
        }
        for(var i=0; i<sliderTrack.length; i++)sliderTrack[i].style.left = left + 'px';
        sliderTrack.addClass('stopped');
    });
    //sliding the track to the right
    $('.slider-left').bind('click', function () {
        if ( left != 0 ) {
        left = left + 500;
        }
        if ( left < -2500 ) {
            left = 0;
        }
        for(var i=0; i<sliderTrack.length; i++)sliderTrack[i].style.left = left + 'px';
        sliderTrack.addClass('stopped');
    });
    
    autoSlider();
    
    //sliding photos-track
    function autoSlider() {
        timer = setInterval(function() {
            left = left - 500;
            //auto-sliding photos-track each 10 sec
            if ( left < -2500 ) {
                left = 0;
            }
            for(var i=0; i<sliderTrack.length; i++)sliderTrack[i].style.left = left + 'px';  
        }, 10000);
    }
});
