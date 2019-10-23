let game_width = document.getElementById("moveme").offsetWidth / 2;
let game_height = document.getElementById("moveme").offsetHeight / 2;


document.body.style.backgroundImage = "url('sky.jpg')";

$(document).on("mousemove", function(event) {
    $("img").css({
        left: (event.pageX - 96 * 2),
        top: (event.pageY - 96 * 2)
    });


    jQuery.easing.bouncey = function(x, t, b, c, d) {
        if ((t = t / d) < (1 / 2.5)) {
            return c * ((6) * t * t) + b;
        } else if (t < (2 / 2.5)) {
            return c * (6 * (t -= (1.5 / 2.5)) * t + .75) + b;
        } else if (t < (2.5 / 2.5)) {
            return c * (6 * (t -= (2.25 / 2.5)) * t + .93) + b;
        } else {
            return c * (6 * (t -= (2.625 / 2.5)) * t + .984) + b;
        }

    };

    $(document).click(function() {
        $('img').stop().animate({ top: 400 }, 1000, 'bouncey');

    });
});