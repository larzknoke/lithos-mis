jQuery.noConflict();
(function ($) {
    $(function () {
        var shrinkHeader = 500;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('#header').addClass('fix-area');
                // $("#logo").find("img").attr("src", "files/ecc-logo-einzeilig.png");
            }
            else {
                $('#header').removeClass('fix-area');
                // $("#logo").find("img").attr("src", "files/Eisenschmidt_Consulting_Crew.png");
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
    // smooth scrolling with anchor links, mi:
    $("a[href^=#]").click(function (e) {
        e.preventDefault();
        var dest = $(this).attr('href');
        $('html,body').animate({scrollTop: $(dest).offset().top}, 'slow');
    });
})(jQuery);
