const stopwatch = document.getElementById('stopwatch');

var seconds = 0;
var centiSeconds = 0;
var paused = true;

function timerStart() {
    if (paused) {
        paused = false;
        timerTick();
    }
}

function timerStop() {
    if (!paused) {
        paused = true;
    }
}

function timerReset() {
    stopwatch.innerHTML = '00.000';
    seconds = 0;
    centiSeconds = 0;
}

function timerTick() {
    if (!paused) {
        seconds = parseInt(seconds);
        centiSeconds = parseInt(centiSeconds);

        centiSeconds++;

        if (centiSeconds >= 100) {
            seconds++;
            centiSeconds = 0;
        }

        stopwatch.innerHTML = seconds.toString() + '.' + centiSeconds.toString();

        setTimeout(() => {
            timerTick()
        }, 10);
    }
}
