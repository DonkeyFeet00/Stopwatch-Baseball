const stopwatch = document.getElementById('stopwatch');
const stopwatchButton = document.getElementById('stopwatch-button');

var seconds = 0;
var centiSeconds = 0;
var paused = true;

function timerStart() {
    if (paused) {
        paused = false;
        stopwatchButton.setAttribute('onclick', 'timerStop()');
        stopwatchButton.innerHTML = 'Stop';
        timerTick();
    }
}

function timerStop() {
    if (!paused) {
        stopwatchButton.setAttribute('onclick', 'timerReset()');
        stopwatchButton.innerHTML = 'Reset';
        paused = true;
    }
}

function timerReset() {
    stopwatchButton.setAttribute('onclick', 'timerStart()');
    stopwatchButton.innerHTML = 'Start';
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

        stopwatch.innerHTML = seconds + '.' + centiSeconds;

        setTimeout(() => {
            timerTick()
        }, 10);
    }
}
