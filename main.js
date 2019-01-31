eventListeners();

function eventListeners(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) =>{
            clicked(button);
        });
    });
}

function clicked(button){
    let buttonText = button.innerText;

    switch(buttonText){
        case 'Play':
            setInterval(timer(), 1000);
            break;
    }
}

// Pseudo:
// User presses 'Pomodoro' button
// minutes = 25 is sent to timer()
// timer() takes current time (new Date()) and adds 25 minutes
// Then each second, display difference between that future time
// and the current time in #timer.textContent

function timer(){
    let targetTime = new Date(0, 25, 0).getTime(),
    now = new Date().getTime(),
    interval = targetTime + now;
    // Pad the time if it is a single digit number, to retain the correct formatting.
    // function checkTime(i) {
    //     if (i < 10) {
    //         i = '0' + i;
    //     }
    //     return i;
    // }
    //Calculations
    var hrs = Math.floor((interval%(1000*60*60*24))/(1000*60*60));
    var mins = Math.floor((interval%(1000*60*60))/(1000*60));
    var secs = Math.floor((interval%(1000*60)) /1000);

    document.getElementById('timer').innerText = hrs + ":" + mins + ':' + secs;
};

