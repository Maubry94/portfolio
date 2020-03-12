"use strict"

$(document).ready(function () {

    // Show buttons
    $(window).scroll(function () {

        // Show scroll top button
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }

        // Show scroll down button
        if ($(this).scrollTop() == 0) {        // If page is scrolled more than 50px
            $('#next-section').fadeIn(200);    // Fade in the arrow
            num = 1;
        }
    });

    // Back to top
    $('#return-to-top').click(function () {      // When arrow is clicked
        num = 1
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });

    // Next section
    let num = 1;
    let active = false;
    $('#next-section').click(function () {



        if (active == false) {

            active = true;

            num++;

            if (num <= 4) {
                $('body,html').animate({
                    scrollTop: $('.section-' + num)[0].offsetTop
                }, 500);

                setTimeout(() => {
                    active = false;
                }, 500);
            }
            if (num == 4) {
                $('#next-section').fadeOut(200);
            }
        }

    });


    /*Skills slider*/
    $('#next').click(function () {
        //console.log("click")
        $("#skill-title1").css("display", "none");
        $(".flex-wrapper1").css("display", "none");
        $("#skill-title2").css("display", "block");
        $(".flex-wrapper2").css("display", "flex");
    });

    $('#previous').click(function () {
        //console.log("click")
        $("#skill-title2").css("display", "none");
        $(".flex-wrapper2").css("display", "none");
        $("#skill-title1").css("display", "block");
        $(".flex-wrapper1").css("display", "flex");
    });
});