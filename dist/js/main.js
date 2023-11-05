(function ($) {
    $(document).ready(function () {
        //Abrir menú
        $('button.burger').on("click", function () {
            $(this).toggleClass('open');
            $(".main-menu").toggleClass('active');
            $("body").toggleClass("no-scroll")
        });

        //open / close modal para descargar juego
        $('button.close').on("click", function () {
            $(".modal").toggleClass("active");
            $("body").toggleClass("no-scroll");
        });

        $('.video-play').on("click", function () {
            $("#trailer").trigger('play');
            $('.video-overlay').addClass('hidden')
        });

        $('.order-now__btn').on("click", function () {
            $(".modal").toggleClass("active");
            $(window).scrollTop(0);
            $("body").toggleClass("no-scroll");
        });

        function initCarouselOnGamePage() {
            $owl = $('.game-page--gallery.owl-carousel');
            console.log("estoy aqui!")
            const carouselGameWrapper = $(".game-page--gallery");
            if (carouselGameWrapper.length >= 1) {
                $owl.trigger('destroy.owl.carousel');
                setTimeout(() => {
                    $owl.owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 5
                            },
                            1280: {
                                items: 6
                            },
                            1700: {
                                items: 7
                            },
                        }
                    })
                }, 500);
            }
        }

        initCarouselOnGamePage();

        $(document).resize(function () {
            // const currentPage = location.
        });


    });
})(jQuery);