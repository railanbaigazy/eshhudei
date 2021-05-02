$(document).ready(function () {
    //changing header while scrolling
    if ($(document).width() > 768) {
        const navOffset = $('#about_us').offset().top;
        $(window).scroll(function () {
            const scrolled = $(this).scrollTop();

            if (scrolled > navOffset) {
                $('.header').addClass('scrolled');
            } else if (scrolled < navOffset) {
                $('.header').removeClass('scrolled');
            }
        });
    }
    if ($(document).width() < 768) {
        $('.hm-a').addClass('mobile-hm-a');
    }
    //displaying/removing menu on mobile
    $('.header-burger,.mobile-hm-a').click(function () {
        $('nav.header-menu,.header-burger').toggleClass('active');
        $('body').toggleClass('hidden');
    });
    //displaying phone links on mobile
    $('.phone-mobile').click(function () {
        $('.mobile-phone').toggleClass('active');
    });
    //displaying callback block
    $('.callback').click(function () {
        $('.callback-wrap').addClass('active');
    });
    //displaying callback block on mobile
    $('.mobile-callback').click(function () {
        $('.callback-wrap').addClass('active');
        $('.mobile-phone').removeClass('active');
    });
    //removing callback block
    $('.callback-exit,.callback-color').click(function () {
        $('.callback-wrap').removeClass('active');
    });
    //removing success block
    $('.success-exit,.success-bc').click(function () {
        $('.success').removeClass('active');
    });
    //removing delivery block
    $('.delivery-exit,.delivery-bc').click(function () {
        $('.delivery').removeClass('active');
    });
    //using a mask for phone input
    $('#phone').mask("+7 (999) 999-99-99");
    $('#phone-mobile').mask("+7 (999) 999-99-99");

});
