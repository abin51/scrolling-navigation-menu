$(".scroll-search-btn").click(function() {
    $(".scroll-search-btn").css ({
        'transform' : 'translate(12vw, 0) rotate(360deg)'
    });

    $(".search-navigation").css ({
        'transform' : 'translate(0, 0)',
        'opacity' : '1'
    });

    $(".btn-minimize").css ({
        'bottom' : '40vh',
        'opacity' : '1'
    });

    $(".search-navigation").removeClass("d-none");
});

$(".btn-minimize").click(function() {
    $(".scroll-search-btn").css ({
        'transform' : 'translate(0, 0)'
    });

    $(".search-navigation").css ({
        'transform' : 'translate(20vw, 0)',
        'opacity' : '0',
    });

    $(".btn-minimize").css ({
        'bottom' : '47.5vh',
        'opacity' : '0'
    });

    $(".search-navigation").addClass("d-none");
});