$(document).ready(function () {
    // toggles menu
    $("#mobile-navigation-menu-close, #mobile-navigation-menu-toggle").click(function(e) {
        e.preventDefault();
        $("#mobile-navigation-wrapper").toggleClass("active");
    });
    /* Desktop Menu */
    var $desktopNavigation = $('#desktop-navigation');
    $desktopNavigation.find('.desktop-menu a').click(function (e) {
        e.preventDefault(e);
        var index = $(this).data('index'),
            $collapse = $desktopNavigation.find('.collapse:eq(' + index + ')');
        if ($collapse.hasClass('in')) {
            $desktopNavigation.find('.collapse').collapse('hide');
        } else {
            $desktopNavigation.find('.collapse:eq(' + index + ')').collapse('show');
        }
    });
    /* Mobile Menu */
    $('#mobile-navigation-wrapper .list-group-item-success').click(function (e) {
        var $me = $(this),
            $glyphicon = $me.find('.glyphicon'),
            classGlyphiconRightName = 'glyphicon-chevron-right',
            classGlyphiconDownName = 'glyphicon-chevron-down';
        if ($glyphicon.hasClass(classGlyphiconRightName)) {
           $glyphicon
                .removeClass(classGlyphiconRightName)
                .addClass(classGlyphiconDownName);
            $me.next('.collapse').addClass("in");
        } else {
            $glyphicon
                .removeClass(classGlyphiconDownName)
                .addClass(classGlyphiconRightName);
            $me.next('.collapse').removeClass("in");
        }
    });
    /* fix bug when window resizes, the navigation has many spaces */
    var refreshOnResize = function () {
        if (window.innerWidth < '1024') {
            $('.container-fluid.page').css('top', $('.logo').height() + 'px');
        }
    };
    refreshOnResize();
    $(window).resize(refreshOnResize);
	$('[data-toggle="tooltip"]').tooltip();
});