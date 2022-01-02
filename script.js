$(".scroll-search-btn").click(function() {
    $(".scroll-search-btn").css ({
        'transform' : 'translate(24vw, 0) rotate(360deg)'
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

    $(".btn-minimize").css ({
        'bottom' : '47.5vh',
        'opacity' : '0'
    });
});