// Pseudo:
// User presses 'Pomodoro' button
// minutes = 25 is sent to timer()
// timer() takes current time (new Date()) and adds 25 minutes
// Then each second, display difference between that future time
// and the current time in #timer.textContent

function timer(minutes) {
    let date = new Date(),
    m = date.setMinutes(minutes),
    seconds = date.getSeconds();

    m = checkTime(m);
    seconds = checkTime(seconds);

    document.getElementById('timer').innerText = minutes + ':' + seconds;

    // Call timer() after 500ms
    let time = setTimeout(timer, 500);
}

// Pad the time if it is a single digit number, to retain the correct formatting.
function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}