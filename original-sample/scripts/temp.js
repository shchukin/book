(function($) {

    /* disable zoom on entering input */

    $('input[type=search]').on('focus', function(){
        // replace CSS font-size with 16px to disable auto zoom on iOS
        $(this).data('fontSize', $(this).css('font-size')).css('font-size', '16px');
    }).on('blur', function(){
        // put back the CSS font-size
        $(this).css('font-size', $(this).data('fontSize'));
    });


    /* iOS unremovable padding on inputs */

    if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
        $('body').addClass('ios');
    }


    /* smooth scrolling */

    jQuery(document).ready(function($) {
        $('a[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();
            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate( {
                'scrollTop': $target.offset().top-40
            }, 900, 'swing', function () {
                window.location.hash = target;
            } );
        } );
    } );


    /* exercises */


    $('.playground__widget').on('keyup', function () {
        var currentBackground = $.trim( $(this).siblings('.playground__background').html() );
        var userText = $(this).val();
        if( userText == currentBackground ) {
            $('input, select, textarea')[$('input,select,textarea').index(this)+1].select();
            $(this).parent('.playground').addClass('playground--complete');
            $(this).attr('disabled', 'disabled');
        } else {
            $(this).parent('.playground').removeClass('playground--complete');
        }
    });


    $('.symbols__answer').on('keyup', function () {
        if( $.trim( $(this).val() ) == $.trim( $(this).data('answer') ) ) {
            $(this).parent('.symbols').addClass('symbols--complete');
            $(this).attr('disabled', 'disabled');
            $('input, select, textarea')[$('input,select,textarea').index(this)+1].select();
        } else {
            $(this).parent('.symbols').removeClass('symbols--complete');
        }
    });

})(jQuery);
