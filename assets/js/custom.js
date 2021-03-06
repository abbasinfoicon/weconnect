(function($) {
    'use strict';
    jQuery(document).on('ready', function() {

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('.main-nav').addClass('menu-shrink');
            } else {
                $('.main-nav').removeClass('menu-shrink');
            }
        });

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });

        // Sorting Portfolio JS
        $('#container').mixItUp();

        // Nice Select JS
        $('select').niceSelect();

        // Counter JS
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // Companies Slider JS
        $('.companies-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                }
            }
        });

        // Profile Slider JS
        $('.profile-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                }
            }
        });

        // Subscribe form
        $(".newsletter-form").validator().on("submit", function(event) {
            if (event.isDefaultPrevented()) {
                // handle the invalid form...
                formErrorSub();
                submitMSGSub(false, "Please enter your email correctly.");
            } else {
                // everything looks good!
                event.preventDefault();
            }
        });

        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            } else {
                formErrorSub();
            }
        }

        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function() {
                $("#validator-newsletter").addClass('hide');
            }, 4000)
        }

        function formErrorSub() {
            $(".newsletter-form").addClass("animated shake");
            setTimeout(function() {
                $(".newsletter-form").removeClass("animated shake");
            }, 1000)
        }

        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
        }

        // AJAX MailChimp
        $(".newsletter-form").ajaxChimp({
            url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
            callback: callbackFunction
        });

        // PRELOADER
        jQuery(window).on('load', function() {
            jQuery(".loader").fadeOut(500);
        });

        // Wow JS
        new WOW().init();

        // Accordion JS
        $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
        $('.accordion a').on('click', function(j) {
            var dropDown = $(this).closest('li').find('p');
            $(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion').find('a.active').removeClass('active');
                $(this).addClass('active');
            }
            dropDown.stop(false, true).slideToggle(300);
            j.preventDefault();
        });

        // Back to top 
        $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-dotted-up"></i></div>');
        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, 900);
            return false;
        });

    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navigation-main').addClass('menu-shrink');
        } else {
            $('.navigation-main').removeClass('menu-shrink');
        }
    });


    var nav = $('.lang-text');
    var selection = $('.select-lg');
    var select = selection.find('li');

    nav.click(function() {
        if (nav.hasClass('active')) {
            nav.removeClass('active');
            selection.stop().slideUp(200);
        } else {
            nav.addClass('active');
            selection.stop().slideDown(200);
        }
    });

    select.click(function() {
        select.removeClass('active');
        $(this).addClass('active');
        // var $lang =  $(this).text();
        // nav.text($lang);
        nav.trigger('click');
    });

    $("table.table-responsive").wrap("<div class='table-responsive'></div>");
})(jQuery);


// ==============Typing COde Start======================

(function() {
    var words = [
            'Technical Support',
            'Business Development',
            'Real Estate Business',
            'Share Market Analysis',
            'Weather & Environment',
            'Finance & Banking Service',
            'IT & Networking Services',
            'Restaurant Services',
            'Defence  & Fire Service',
            'Home Delivery Services'
        ],
        i = 0;
    setInterval(function() {
        $('#changingword').fadeOut(function() {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 3000);

})();

(function() {
    var frenchwords = [
            'Soutien technique',
            'D????veloppement des affaires',
            'Entreprise immobili????re',
            'Analyse du march???? des parts',
            'M????t????o et environnement',
            'Service financier et bancaire',
            'Services informatiques et r????seau',
            'Services de restauration',
            "Service de d????fense et d'incendie",
            'Services de livraison ??  domicile'
        ],
        i = 0;
    setInterval(function() {
        $('#changingwordfrench').fadeOut(function() {
            $(this).html(frenchwords[i = (i + 1) % frenchwords.length]).fadeIn();
        });
    }, 3000);

    $('.left-section>.mdia-main').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('body').on('click','.mdia-main',function(){
        console.log($(this).attr('dataid'));
        console.log($(this).children().find('img').attr('dataImg'));
        console.log($(this).children().find('h4').attr('dataH4'));
        console.log($(this).children().find('.p1').attr('datap1'));
        console.log($(this).children().find('.p2').attr('datap2'));
        console.log($(this).children().find('.date').attr('dataDate'));
     });
})();