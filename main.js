let targetTime, interval, eachSecond, played = 0, initialized = false, sessionTime = 25; 
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
            timer.classList.remove('stopped');
            
            if (!initialized){
                initializeTimer(sessionTime)
            }

            played += 1;

            if (played == 1){
                eachSecond = setInterval(function(){
                    interval -= 1000;
                    if (interval < 0){
                        clearInterval(eachSecond);
                        let timer = document.getElementById('timer');
                        timer.classList.add('stopped');
                    } else {
                        var mins = Math.floor((interval%(1000*60*60))/(1000*60));
                        var secs = checkTime(Math.floor((interval%(1000*60)) /1000));
                        document.getElementById('timer').innerText = mins + ':' + secs;
                    }

                }, 1000);
            }
            break;
        case 'Pause':
            clearInterval(eachSecond);
            played = 0;
            break;
        case 'Reset':
            clearInterval(eachSecond);    
            resetTimer();
            break;
        case 'Pomodoro':
            sessionTime = 25;
            resetTimer();
            break;
        case 'Short Break':
            sessionTime = 5;
            resetTimer();
            break;
        case 'Long Break':
            sessionTime = 10;
            resetTimer();
            break;
    }
}

function initializeTimer(minutes){
    targetTime = new Date().getTime() + (minutes*60*1000);
    now = new Date().getTime();
    interval = targetTime - now;
    initialized = true;
}

function resetTimer() {
    clearInterval(eachSecond);
    initialized = false;
    played = 0;
    timer.classList.remove('stopped');
    document.getElementById('timer').innerText = `${sessionTime}:00`;
}

//Pad the time if it is a single digit number, to retain the correct formatting.
function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}