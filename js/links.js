$(function () {
    $('.hm-a,.banner-link,.foo-a').bind('click', function () {
        var getLink = $(this).attr('href');
        if ($(getLink).length) {
            var getOffset = $(getLink).offset().top;
            $('html,body').animate({
                scrollTop: getOffset
            },
            500);
        }
    });
});