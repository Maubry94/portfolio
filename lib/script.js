"use strict"

$(document).ready(function () {

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        num = 1
        $('#next-section').fadeIn(200);
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });


    // Next section arrow
    let num = 1;

    $('#next-section').click(function () {
        num++;
        if (num <= 4) {
            $('body,html').animate({
                scrollTop: $('.section-' + num)[0].offsetTop
            }, 500);
        }
        if (num == 4) {
            $('#next-section').fadeOut(200);
        }
    });
});



