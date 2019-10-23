count = 10;
setTimeout(function onTimeout() {

    const newLocal = "slow";
    $('#animate').fadeOut(1000).fadeIn('slow', function() {
        if (count > 0) {
            count--;
            setTimeout(onTimeout, 3000);
        }
    });
}, 300);