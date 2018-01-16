/*

Tinkering around with a fixed nav bar, and changing it based on scroll


*/

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 49) {
            $('body').addClass('header-fixed');
        } else {
            $('body').removeClass('header-fixed');
        }

        var topOffset = $('#demosection2').offset().top;
        var headerHeight = $('#topnav').height();
        var transitionPoint = topOffset - headerHeight;
        if (scrollTop > transitionPoint) {
            $('#topnav').addClass('alt-header');
        } else {
            $('#topnav').removeClass('alt-header');
        }
    });
});