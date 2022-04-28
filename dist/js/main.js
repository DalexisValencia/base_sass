$(document).ready(function() {
    const mainSlider = $(".main-slider--container.owl-carousel");
    //Se valida que el elemento exista antes de instanciarlo
    if (mainSlider) {
        mainSlider.owlCarousel({
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            items: 1,
            navContainer: $(".main-slider--nav")
        });
    }

    //Se valida que exista algún select
    const selects = $("select");
    if (selects) {
        selects.niceSelect();
    }

    //Función para mostrar el componente "Book Now"
    const bookMarket = $(".book-now--marker");
    if (bookMarket) {
        $(".book-now--marker").on("click", function() {
            const bookNow = $(".book-now"); //book now container
            const bookNowMask = $(".book-now--mask"); // mask container "book now"
            bookNow.hasClass("show-form") ? bookNow.removeClass("show-form") : bookNow.addClass("show-form");
            bookNowMask.hasClass("active") ? bookNowMask.removeClass("active") : bookNowMask.addClass("active");
        });
    }

    //slider de eventos
    const events = $(".homepage-events--slider.owl-carousel");
    if (events) {
        events.owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            items: 4,
            margin: 20,
            responsive: {
                0: {
                    items: 1.5,
                    nav: true
                },
                599: {
                    items: 1,
                    nav: false
                },
                699: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                },
                1600: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        });
    }
});