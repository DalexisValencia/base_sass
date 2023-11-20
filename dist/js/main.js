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

        const owlCarouselOptions = {
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
        }

        function initCarouselOnGamePage() {
            $owlGamePage = $('.game-page--gallery.owl-carousel');
            const carouselGameWrapper = $(".game-page--gallery");
            if (carouselGameWrapper.length >= 1) {
               $owlGamePage .trigger('destroy.owl.carousel');
                setTimeout(() => {
                    $owlGamePage .owlCarousel(owlCarouselOptions);
                }, 500);
            }
        }

        function initCarouselOnGallery() {
            $owl = $('.gallery-page--carousel.owl-carousel');
            const carouselGalleryWrapper = $(".gallery-page--carousel");
            if (carouselGalleryWrapper.length >= 1) {
               $owl.trigger('destroy.owl.carousel');
                setTimeout(() => {
                    $owl.owlCarousel(owlCarouselOptions);
                }, 500);

                $(".gallery-page--carousel .item").on("click", function(){
                    const image = $(this).find("img").attr("src");
                    const title = $(this).attr("data-attr-title");
                    const description = $(this).attr("data-attr-description");

                    $("#gallery-title").html(title || "Vacío");
                    $("#gallery-description").html(description || "Vacío");
                    const windSize = $(window).width();
                    $("#highligh-image").attr("src", image);

                    if (windSize <= 690) {
                        $( window ).scrollTop( 0 );
                    }
                })
            }
        }

        initCarouselOnGamePage();
        initCarouselOnGallery();

    });
})(jQuery);