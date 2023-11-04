(function ($) {
    $(document).ready(function () {
       //jquery base
       $('button.burger').on("click", function(){
            $(this).toggleClass('open');
            $(".main-menu").toggleClass('active');
            $("body").toggleClass("no-scroll")
       });
    });
})(jQuery);