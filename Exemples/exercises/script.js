const startClock = document.querySelector('.start');
const stopClock = document.querySelector('.stop');
const time = document.querySelector('.timer');

startClock.addEventListener("click", startTimer);
stopClock.addEventListener("click", stopTimer);
stopClock.addEventListener("dblclick", resetTimer);
let i = 0;
let timer;

function startTimer(){
    timer = setInterval(() => {
        time.innerText = i++;
    }, 100);
    startClock.setAttribute("disabled", "");
}

function stopTimer(){
    clearInterval(timer);
    startClock.removeAttribute("disabled");
}
function resetTimer(){
    time.innerText = 0;
    i = 0;
}