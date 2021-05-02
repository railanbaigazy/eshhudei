window.onload = function() {
    setTimeout(function () {
        var preload = document.getElementById('page-preloader');
        if (!preload.classList.contains('done')) {
            preload.classList.add('done');
        }
    }, 1000
    );
}