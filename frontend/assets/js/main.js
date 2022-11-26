(function ($) {
    "use strict";

    /* Newsletter */
    $(window).on('load', function () {
        setTimeout(function () {
            $(".newsletter_form_wrapper").addClass("newsletter_active").fadeIn();
        }, 1500);
    });

    $('.close_modal').on('click', function () {
        $('.newsletter_form_wrapper').removeClass('newsletter_active');
    })
    $(document).click(function (event) {
        if (!$(event.target).closest(".newsletter_form_inner").length) {
            $("body").find(".newsletter_form_wrapper").removeClass('newsletter_active');
        }
    });

    /* main slider active 1 */
    $('.main-slider-active-1').owlCarousel({
        loop: true,
        nav: false,
        navText: [],
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* main slider active 3 */
    $('.main-slider-active-4').owlCarousel({
        loop: true,
        nav: false,
        navText: ['<i class="lni lni-minus"></i>', '<i class="lni lni-minus"></i>'],
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* Products round active */
    $('.Products-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 2000,
        item: 4,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            992: {
                items: 3
            },
        }
    })

    /* Products shoes round active */
    $('.Products-shoes-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 4,
        margin: 24,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 2
            },
            992: {
                items: 3
            },
        }
    })

    /* Products fruit round active */
    $('.Products-fruit-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 4,
        margin: 24,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 2
            },
            992: {
                items: 4
            },
        }
    })

    /* Products socks round active */
    $('.Products-socks-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [''],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 4,
        margin: 24,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            991: {
                items: 2
            },
            992: {
                items: 4
            },
        }
    })

    /* blog sweet round active */
    $('.blog-fruit-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        item: 2,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 2
            },
            992: {
                items: 2
            },
        }
    })

    /* main slider active 2 */
    $('.main-slider-active-2').owlCarousel({
        loop: true,
        nav: false,
        navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* main slider fruit active 2 */
    $('.main-slider-fruit-active-2').owlCarousel({
        loop: true,
        nav: false,
        navText: [],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* main-slider-fashion-active */
    $('.main-slider-fashion-active').owlCarousel({
        loop: true,
        nav: false,
        navText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /*----------------------------
     Youtube video
     ------------------------------ */
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        startAt: 0,
        loop: true,
    });

    /*---------------------
     Video popup
     --------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });


    /* Blog active */
    $('.blog-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    /*--------------------------------
     Featured categories active
     -----------------------------------*/
    $('.featured-categories-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 8,
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 8
            }
        }
    })

    /*--------------------------------
     Products carousel
     -----------------------------------*/


    /*---------------------
     Countdown
     --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
                finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day"> <span>%-D </span><p>Days</p></span> <span class="cdown hour"> <span> %-H</span> <p>Hours</p></span> <span class="cdown minutes"><span>%M</span> <p>Mins</p></span class="cdown second"> <span> <span>%S</span> <p>Secs</p></span>'));
        });
    });


    /*------ Wow Active ----*/
    new WOW().init();

    /* Brand logo active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        item: 0,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });

    /* Brand logo active-2 */
    $('.brand-logo-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 6,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1366: {
                items: 5
            },
            1400: {
                items: 6
            }
        }
    })


    /* Testimonial active */
    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 50,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1199: {
                items: 2
            },
            1250: {
                items: 3
            }
            
        }
    })

    /* reviews active */
    $('.reviews-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 3,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* testimonials hotel active */
    $('.testimonials-hotel-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 3,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })


    /* Testimonial-02 active */
    $('.testimonial-02-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 3000,
        item: 3,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* subscribe active */
    $('.subscribe-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /* blog art round active */
    $('.blog-art-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 2000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            992: {
                items: 1
            },
        }
    })

    /* Instagram fashion round active */
    $('.Instagram-fashion-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 5,
        item: 4,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            991: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })

    /* slick slide round active */
    $('.slick-slide-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            992: {
                items: 1
            },
        }
    })

    /* landing Products round active */
    $('.landing-Products-round-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 2000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            992: {
                items: 1
            },
        }
    })

    /* slick slide hotel active */
    $('.slick-slide-hotel-active').owlCarousel({
        loop: true,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            992: {
                items: 1
            },
        }
    })

    /* Testimonial active 2 */
    $('.testimonial-active-2').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class=" ti-angle-left "></i>', '<i class=" ti-angle-right "></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })


    /*====== Sidebar active ======*/
    function sidebarInfo() {
        var searchTrigger = $('.clickalbe-button-active'),
                endTriggersearch = $('.sidebar-close'),
                container = $('.clickalbe-sidebar-wrapper-active'),
                wrapper2 = $('.main-wrapper');
        searchTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('sidebar-visible');
            wrapper2.addClass('overlay-active');
        });
        endTriggersearch.on('click', function () {
            container.removeClass('sidebar-visible');
            wrapper2.removeClass('overlay-active');
        });
    }
    ;
    sidebarInfo();

    /*====== clickable Main Menu active ======*/
    var $clickableMainMenu = $('.clickable-mainmenu-wrap'),
            $clickableSubMenu = $clickableMainMenu.find('.sub-menu-2');
    /*Add Toggle Button in Off Canvas Sub Menu*/
    $clickableSubMenu.siblings('a').append('<span class="menu-expand"><i class="fa fa-caret-down"></i></span>');
    /*Close Off Canvas Sub Menu*/
    $clickableSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $clickableMainMenu.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if ($this.parent('li').hasClass('has-sub-menu') || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active').children('ul').slideUp().siblings('a').find('.menu-expand i').removeClass(' fa fa-caret-up ').addClass('fa fa-caret-down');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass(' lni-chevron-up ').addClass('fa fa-caret-down');
            } else {
                $this.parent('li').addClass('active').children('ul').slideDown().siblings('a').find('.menu-expand i').removeClass('fa fa-caret-down').addClass(' fa fa-caret-up ');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa fa-caret-up ').addClass('fa fa-caret-down');
            }
        }
    });


    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
                endTrigger = $('.cart-close'),
                container = $('.sidebar-cart-active'),
                wrapper2 = $('.main-wrapper');

        wrapper2.prepend('<div class="body-overlay"></div>');

        navbarTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper2.addClass('overlay-active');
        });

        endTrigger.on('click', function () {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });

        $('.body-overlay').on('click', function () {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });
    }
    ;
    miniCart();



    /*--- Language currency active ----*/
    $('.mobile-language-active').on('click', function (e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function (e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });
    $('.mobile-account-active').on('click', function (e) {
        e.preventDefault();
        $('.account-dropdown-active').slideToggle(900);
    });


    /*====== mobileMenu active ======*/
    function mobileMenu() {
        var mobilemenuTrigger = $('.mobile-menu-button-active'),
                endTriggermobilemenu = $('.sidebar-close'),
                container = $('.mobile-menu-active');
        mobilemenuTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('mobilemenu-visible');
        });
        endTriggermobilemenu.on('click', function () {
            container.removeClass('mobilemenu-visible');
        });
    }
    ;
    mobileMenu();


    /*====== clickable Main Menu 2 active ======*/
    var $clickableMainMenu = $('.clickable-mainmenu-wrap-2, .sidebar-widget-categories'),
            $clickableSubMenu = $clickableMainMenu.find('.sub-menu-3, .sw-sub-menu');
    /*Add Toggle Button in Off Canvas Sub Menu*/
    $clickableSubMenu.siblings('a').append('<span class="menu-expand"><i class="fa fa-angle-down "></i></span>');
    /*Close Off Canvas Sub Menu*/
    $clickableSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $clickableMainMenu.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if ($this.parent('li').hasClass('sw-sub-wrap, has-sub-menu') || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active').children('ul').slideUp().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-up ').addClass('fa fa-angle-down');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
            } else {
                $this.parent('li').addClass('active').children('ul').slideDown().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-down ').addClass('fa fa-angle-up');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
            }
        }
    });

    /*------- Jarallax active  ------*/
    $('.jarallax').jarallax({
        speed: 0.6,
    });

    /*-------------------------------
     Header Search Toggle
     -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.search-wrap-3').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).siblings('.search-wrap-3').addClass('open');
        }
    })

    /*-------------------------
     category toggle function
     --------------------------*/
    $('.showcat').on('click', function (e) {
        e.preventDefault();
        $('.hidecat').slideToggle(900);
    });
    /*-------------------------
     category 2 toggle function
     --------------------------*/
    $('.showcat-2').on('click', function (e) {
        e.preventDefault();
        $('.hidecat-2').slideToggle(900);
    });
    /*-------------------------
     category 2 toggle function
     --------------------------*/
    $('.showcat-3').on('click', function (e) {
        e.preventDefault();
        $('.hidecat-3').slideToggle(900);
    });



    /* Sidemenu Dropdown */
    function sidemenuDropdown() {
        var $this = $('.mobile-category-menu');
        $this.find('nav .cr-dropdown')
                .find('ul').slideUp();
        $this.find('nav li.cr-dropdown > a, nav li.cr-sub-dropdown > a').on('click', function (e) {
            e.preventDefault();
            $(this).next().slideToggle();
        });
    }
    sidemenuDropdown();

    /* Product slider 1 active */
    $('.product-slider-1').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3,
            },
            1600: {
                items: 3,
            }
        }
    })

    /* Organic categories active */
    $('.organic-categories-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 5,
        margin: 90,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 3,
                margin: 50,
            },
            992: {
                items: 3
            },
            1200: {
                items: 4,
            },
            1600: {
                items: 5,
            }
        }
    })

    /*------- Quickview slider active -------*/
    $('.quickview-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    /*----------------------------
     Cart Plus Minus Button
     ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*-----------------------
     Shop filter active 
     ------------------------- */
    $('.shop-filter-active').on('click', function (e) {
        e.preventDefault();
        $('.product-filter-wrapper').slideToggle();
    })

    /*---------------------
     Price slider
     --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function () {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function (event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
                " - $" + sliderrange.slider("values", 1));
    });

    /*------- Color active -----*/
    $('.sidebar-widget-color').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    });


    /*=========================
     Toggle Ativation
     ===========================*/
    function itemToggler() {
        $(".toggle-item-active").slice(0, 16).show();
        $(".item-wrapper").find(".loadmore").on('click', function (e) {
            e.preventDefault();
            $(this).parents(".item-wrapper").find(".toggle-item-active:hidden").slice(0, 4).slideDown();
            if ($(".toggle-item-active:hidden").length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler();

    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();

    /*------------------------------------
     Quick view Slick Carousel
     -----------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider , .product-dec-slider-2',
    });

    /*--------------------------------
     Product details slider active
     -----------------------------------*/
    $('.product-dec-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-icon pro-dec-prev"><i class="ti-arrow-down"></i></span>',
        nextArrow: '<span class="pro-dec-icon pro-dec-next"><i class="ti-arrow-up"></i></span>',
        responsive: [{
                breakpoint: 767,
                settings: {

                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*---------------------------------
     Product details slider 2 active
     -----------------------------------*/
    $('.product-dec-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-icon pro-dec-prev"><i class="ti-arrow-left"></i></span>',
        nextArrow: '<span class="pro-dec-icon pro-dec-next"><i class="ti-arrow-right"></i></span>',
        responsive: [{
                breakpoint: 767,
                settings: {

                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*------------------------
     Magnific Popup
     ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* Related product active */
    $('.related-product-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1500: {
                items: 3
            }
        }
    })


    var clockWiseSlider = targetSlider => {
        let currSlide = targetSlider.find('li.active');
        // console.log(currSlide);

        if (currSlide.is(':last-child')) {
            currSlide.attr('class', 'clockWiseOut').siblings('li:first-child').attr('class', 'active clockWiseIn');
        } else {
            currSlide.attr('class', 'clockWiseOut').next().attr('class', 'active clockWiseIn');
        }
    }

    var antiClockWiseSlider = targetSlider => {
        let currSlide = targetSlider.find('li.active');
        // console.log(currSlide);

        if (currSlide.is(':first-child')) {
            currSlide.attr('class', 'antiClockWiseOut').siblings('li:last-child').attr('class', 'active antiClockWiseIn');
        } else {
            currSlide.attr('class', 'antiClockWiseOut').prev().attr('class', 'active antiClockWiseIn');
        }
    }

// Loop the slider
    var sliderLooper = setInterval(function () {
        clockWiseSlider($('ul.js-rotate-slide'));

        // or try Anti Clockwise:
        // antiClockWiseSlider($('ul.js-rotate-slide'));
    }, 8000);

// Create Abort trigger
    abortLooper = () => {
        clearInterval(sliderLooper);
    }

    window.onload = function () {
        // [Custom jQuery] Clock Rotate Slider
        $('.slide-nav').on('click', 'span.next', function () {
            abortLooper();
            clockWiseSlider($('ul.js-rotate-slide'));
        });

        $('.slide-nav').on('click', 'span.prev', function () {
            abortLooper();
            antiClockWiseSlider($('ul.js-rotate-slide'));
        });
    }
    /*---------------------
     Sidebar sticky active
     --------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 0,
        bottomSpacing: 30,
        minWidth: 991,
    });

    /*--------------------------
     Sidebar sticky active
     --------------------- ----*/
    $('.register-active').on('click', function (e) {
        e.preventDefault();
        $('.register-form-wrap').slideToggle(900);
    });

    /*--- Checkout toggle function ----*/
    $('.checkout-click1').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });

    /*--- Checkout toggle function ----*/
    $('.checkout-click3').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });

    /*-------------------------
     Create an account toggle
     --------------------------*/
    $('.checkout-toggle2').on('click', function () {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function () {
        $('.open-toggle').slideToggle(1000);
    });

    /*---------------------------------
     checkout one click toggle function
     ----------------------------------*/
    var checked = $('.sin-payment input:checked')
    if (checked) {
        $(checked).siblings('.payment-box').slideDown(900);
    }
    ;
    $('.sin-payment input').on('change', function () {
        $('.payment-box').slideUp(900);
        $(this).siblings('.payment-box').slideToggle(900);
    });
    /*------------------------------*/

    /*------------
     ScrollUp
     ------------------ */
    $.scrollUp({
        scrollText: '<i class="lni lni-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*=====================
     Add to wishlist
     ==========================*/
    $('.product-action a .fa-heart-o , .product-action a .fa-heart-o').on('click', function () {

        $.notify({
            icon: 'fa fa-check',
            title: 'Success!',
            message: 'Item Successfully added in wishlist'
        }, {
            element: 'body',
            position: null,
            type: "info",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: true,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
        });
    });

    /*=====================
     counter js
     ==========================*/
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);

