$(function() {
    console.log( "ready!" );

    var headerHeight = $('header').outerHeight()
        , $navbar = $('.navbar')
        , navHeight = $navbar.outerHeight()
        , $section = $('section');

    $(window).scroll(function() {
        var current = $(this).scrollTop();

        if (current >= headerHeight) {
            $navbar.addClass('stick');
        } else {
            $navbar.removeClass('stick');
        }

        $section.each(function() {
            var sectionTop = $(this).offset().top - navHeight
                , sectionBottom = sectionTop + $(this).outerHeight();

            if (current >= sectionTop && current <= sectionBottom) {
                $('.active').removeClass('active');
                $('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

});