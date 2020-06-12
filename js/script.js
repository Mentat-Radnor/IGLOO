$(document).ready(function() {


    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
    });

});

$(document).ready(function() {


    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ],
    });

});