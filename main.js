let targetTime, interval, eachSecond, numPlays = 0; 
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
            

            if (numPlays == 0){
                initializeTimer()
            }

            if (numPlays > 0){
                eachSecond = setInterval(function(){
                    interval -= 1000;
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
            }
            break;
        case 'Pause':
            clearInterval(eachSecond);
            break;
        case 'Reset':
            break;
    }
}
function initializeTimer(){
    targetTime = new Date().getTime() + (25*60*1000);
    now = new Date().getTime();
    interval = targetTime - now;
    numPlays += 1;
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