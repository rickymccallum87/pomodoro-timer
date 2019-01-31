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
    let buttonText = button.innerText,
    paused = false;
    let targetTime;

    switch(buttonText){
        case 'Play':
            timer.classList.remove('stopped');
            if (!paused) {
                targetTime = new Date().getTime() + (25*60*1000);
            }
            
            eachSecond = setInterval(function(){
                let now = new Date().getTime(),
                interval = targetTime - now;

                if (interval < 0){
                    clearInterval(eachSecond);
                    let timer = document.getElementById('timer');
                    timer.classList.add('stopped');
                } else {
                    var mins = Math.floor((interval%(1000*60*60))/(1000*60));
                    var secs = Math.floor((interval%(1000*60)) /1000);
                    document.getElementById('timer').innerText = mins + ':' + secs;
                }

            }, 1000);
            break;
        case 'Pause':
            clearInterval(eachSecond);
            paused = true;
            break;
        case 'Reset':
            break;
    }
}

// Pad the time if it is a single digit number, to retain the correct formatting.
// function checkTime(i) {
//     if (i < 10) {
//         i = '0' + i;
//     }
//     return i;
// }

// Pad with zeroes when necessary
function padTime() {

}