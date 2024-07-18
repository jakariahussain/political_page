(function ($) {

    //magnificPopup
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //isotope plugin
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })
    // filter items on button click
    $('.portfolio_menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //(plugin name wow plugins)
    new WOW().init();

    // sticky nav
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('.sticky').removeClass("scroll-header");
        } else {
            $('.sticky').addClass("scroll-header");
        }
    });

    //counter js
    $(document).ready(function () {

        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];

        for (i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }

        var count = function (start, value, id) {
            var localStart = start;
            setInterval(function () {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart;
                }
            }, 0);
        }

        for (j = 0; j < countersQuantity; j++) {
            count(30, counter[j], j);
        }
    });

    //timer js
    var clock = $('.clock').FlipClock(3600 * 24 * 3, {
        clockFace: 'DailyCounter',
        countdown: true
    });
    //LineProgressbar js
    $('#demoprogressbar1').LineProgressbar({
        percentage: 95
    });
    $('#demoprogressbar2').LineProgressbar({
        percentage: 95
    });

    // smoth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        speed: 2000,
        offset: 0,
        easing: 'easeInOutCubic',
        customEasing: function (time) {
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        },
    });

})(jQuery);