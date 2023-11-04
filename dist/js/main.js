(function ($) {
    $(document).ready(function () {
       //Abrir menú
       $('button.burger').on("click", function(){
            $(this).toggleClass('open');
            $(".main-menu").toggleClass('active');
            $("body").toggleClass("no-scroll")
       });

       $('button.close').on("click", function() {
        $(".modal").toggleClass("active");
       });
    });
})(jQuery);