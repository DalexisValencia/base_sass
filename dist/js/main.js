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
    });
})(jQuery);