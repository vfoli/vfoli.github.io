/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {
    //init 
    init();
    
    //init wow effects
    new WOW().init();

    // init feather icons
    feather.replace();

    //scroll menu
    $(window).scroll(function () {
        init();
    });

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

     //toggle scroll menu
     $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll >= 200) {
            $('.sticky-navigation').removeClass('navbar-dark').addClass('navbar-light').addClass('bg-white').addClass('navbar-shadow').attr('src','vfoli-dark.png');
        } else {
            $('.sticky-navigation').removeClass('navbar-light').addClass('navbar-dark').removeClass('bg-white').removeClass('navbar-shadow').attr('src','vfoli-light.png');
        }
        
        //toggle image
        if (scroll >= 200) {
            $('.navbar-brand img').show();
          } else {
            $('.navbar-brand img').hide();
        }

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });
    
    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    //init function
    function init() {
        var secondFeature = $('#features').offset().top;
        return false;
    }
});