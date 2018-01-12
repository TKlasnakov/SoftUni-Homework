/**
 * Created by TKlas on 23.10.2016 г..
 */

function timer() {
    var start = $('#start-timer'),
        stop = $('#stop-timer'),
        seconds = parseFloat($('#seconds').val() - '0'),
        mins = parseFloat($('#minutes').val() - '0'),
        hours = parseFloat($('#hours').val() - '0'),
        clicked = false,
        interval;

    start.click('click', function () {
        if (!clicked) {
            interval = setInterval(function () {
                seconds++;

                if (seconds === 60) {
                    seconds = 0;
                    mins++;
                }
                if (mins === 60) {
                    mins = 0;
                    hours++;
                }
                if(hours < 10) {
                    $('#hours').text('0' + hours)
                } else if (hours >= 10) {
                    $('#hours').text(hours)
                }
                if (mins < 10) {
                    $('#minutes').text('0' + mins);
                } else if (mins >= 10){
                    $('#minutes').text(mins);
                }

                if (seconds < 10) {
                    $('#seconds').text('0' + seconds);
                } else if(seconds >= 10) {
                    $('#seconds').text(seconds);
                }
                clicked = true;
            }, 1000);
        }

    });

    stop.on('click', function () {
        clearInterval(interval);
        clicked = false;
    });
}
