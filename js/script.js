$(document).ready(function() {

    // FIXED HEADER
    $(function() {
        let header = $(`#header`);
        let intro = $(`#intro`);
        let introH = intro.innerHeight();
        let scrollPos = $(window).scrollTop();
        let nav = $(`#nav`);
        let navToggle = $(`#navToggle`);

        checkScroll(scrollPos, introH);

        $(window).on("scroll resize", function() {
            let intoH = intro.innerHeight();
            scrollPos = $(this).scrollTop();

            checkScroll(scrollPos, introH);
        });

        function checkScroll(scrollPos, introH) {
            if (scrollPos > introH) {
                header.addClass(`fixed`);
            } else {
                header.removeClass(`fixed`);
            }
        }

        // SCROLL
        $(`[data-scroll]`).on(`click`, function(event) {
            event.preventDefault();

            let elementId = $(this).data(`scroll`);
            let elementOffset = $(elementId).offset().top;

            nav.removeClass(`nav__show`);

            $(`html, body`).animate({
                scrollTop: elementOffset - 80
            }, 800)
        });

        // navToggle

        navToggle.on(`click`, function(event) {
            nav.toggleClass(`nav__show`);
            $(`.nav__ul`).toggleClass(`center`)
        })
    });

    // slider reviews




    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
    });


});

//  SLIDER GALLERY
$(document).ready(function() {
    $('.popup-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });
    $('.popup-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('.popup-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 769,
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

    // Отправка формы
    $(".form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    // animation card
    AOS.init({
        duration: 700,
    });

});