$(document).ready(function () {
    console.log("Document is ready...");
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.scroll-down').each(function (i) {
            var top_of_object = $(this).position().top;
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_window = $(window).scrollTop();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            /*
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('anim-scroll-down');
            }
            */
            var originalTranslateYPixels = convertRemToPixels(5); // We use 'transform: translateY(5rem);'
            var test1 = (bottom_of_window - top_of_window) * .15;
            var test2 = bottom_of_window - top_of_object - originalTranslateYPixels;

            if (test1 < test2 && test2 > 0) {
                $(this).addClass('anim-scroll-down');
            }
        });
    });
});

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}