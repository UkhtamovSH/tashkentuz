(function ($) {
    this.MobileNav = function () {
        this.curItem,
            this.curLevel = 0,
            this.transitionEnd = _getTransitionEndEventName();

        var defaults = {
            initElem: ".main-menu",
            menuTitle: "Menu"
        }

        // Check if MobileNav was initialized with some options and assign them to the "defaults"
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        // Add to the "defaults" ONLY if the key is already in the "defaults"
        function extendDefaults(source, extender) {
            for (option in extender) {
                if (source.hasOwnProperty(option)) {
                    source[option] = extender[option];
                }
            }
        }

        MobileNav.prototype.getCurrentItem = function () {
            return this.curItem;
        };

        MobileNav.prototype.setMenuTitle = function (title) {
            defaults.menuTitle = title;
            _updateMenuTitle(this);
            return title;
        };

        // Init is an anonymous IIFE
        (function (MobileNav) {
            var initElem = ($(defaults.initElem).length) ? $(defaults.initElem) : false;

            if (initElem) {
                defaults.initElem = initElem;
                _clickHandlers(MobileNav);
                _updateMenuTitle(MobileNav);
            } else {
                console.log(defaults.initElem + " element doesn't exist, menu not initialized.");
            }
        }(this));

        function _getTransitionEndEventName() {
            var i,
                undefined,
                el = document.createElement('div'),
                transitions = {
                    'transition': 'transitionend',
                    'OTransition': 'otransitionend', // oTransitionEnd in very old Opera
                    'MozTransition': 'transitionend',
                    'WebkitTransition': 'webkitTransitionEnd'
                };

            for (i in transitions) {
                if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
                    return transitions[i];
                }
            }
        };

        function _clickHandlers(menu) {
            defaults.initElem.on('click', '.has-dropdown > a', function (e) {
                e.preventDefault();
                menu.curItem = $(this).parent();
                _updateActiveMenu(menu);
            });

            defaults.initElem.on('click', '.nav-toggle', function () {
                _updateActiveMenu(menu, 'back');
            });
        };

        // TODO: Make this DRY (deal with waiting for transitionend event)
        function _updateActiveMenu(menu, direction) {
            _slideMenu(menu, direction);
            if (direction === "back") {
                /*defaults.initElem.children('ul').one(menu.transitionEnd, function(e) {
                        menu.curItem.removeClass('nav-dropdown-open nav-dropdown-active');
                        menu.curItem = menu.curItem.parent().closest('li');
                        menu.curItem.addClass('nav-dropdown-open nav-dropdown-active');
                        _updateMenuTitle(menu);
                });*/

                menu.curItem.removeClass('nav-dropdown-open nav-dropdown-active');
                menu.curItem = menu.curItem.parent().closest('li');
                menu.curItem.addClass('nav-dropdown-open nav-dropdown-active');
                _updateMenuTitle(menu);
            } else {
                menu.curItem.addClass('nav-dropdown-open nav-dropdown-active');
                _updateMenuTitle(menu);
            }
        };

        // Update main menu title to be the text of the clicked menu item
        function _updateMenuTitle(menu) {
            var title = defaults.menuTitle;
            if (menu.curLevel > 0) {
                title = menu.curItem.children('a').text();
                defaults.initElem.find('.nav-toggle').addClass('back-visible');
            } else {
                defaults.initElem.find('.nav-toggle').removeClass('back-visible');
            }
            $('.nav-title').text(title);
        };

        // Slide the main menu based on current menu depth
        function _slideMenu(menu, direction) {
            if (direction === "back") {
                menu.curLevel = (menu.curLevel > 0) ? menu.curLevel - 1 : 0;
            } else {
                menu.curLevel += 1;
            }
            defaults.initElem.children('ul').css({
                "transform": "translateX(-" + (menu.curLevel * 100) + "%)"
            });
        };
    }
}(jQuery));

$(document).ready(function () {
    var MobileMenu = new MobileNav({
        initElem: "nav",
        menuTitle: "Menu",
    });

    $('.js-nav-toggle').on('click', function (e) {
        e.preventDefault();

        $('.nav-wrapper').toggleClass('show-menu');
    });
});


$('.app_services_and_comments_div2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.app_useful_resources_section .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        },
        1300: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
});


// Language Change Function Start
var $select1 = $( '#select1' ),
    $select2 = $( '#select2' ),
$options = $select2.find( 'option' );

$select1.on( 'change', function() {
    $select2.html( $options.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );
// Language Change Function End

// Navigation Nav Modal Start
function openNav() {
    document.body.style.overflow = "hidden";
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.body.style.overflow = "visible";
    document.getElementById("myNav").style.width = "0%";
}
// Navigation Nav Modal End

// Navigation Nav Modal One Start
function openNavModalOne() {
    document.body.style.overflow = "hidden";
    document.getElementById("navigation_modal_one").style.height = "100%";
}

function closeNavModalOne() {
    document.body.style.overflow = "visible";
    document.getElementById("navigation_modal_one").style.height = "0%";
}
// Navigation Nav Modal One End


