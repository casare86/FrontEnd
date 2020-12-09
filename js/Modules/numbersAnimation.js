export default function initNumbersAnimation() {

}
function animateNumbers() {
    const numbers = document.querySelectorAll('[data-number]');
    numbers.forEach((number) => {
        const total = +number.innerHTML;
        const increment = Math.floor(total / 100);
        console.log(number);
        let start = 0;
        const timer = setInterval(() => {
            start += increment;  
            number.innerHTML = start;
            if(start > total){
                number.innerHTML = total;
                clearInterval(timer);
            }
        }, 50 * Math.random());
    });
}

function handleMutation(mutation){
    //mutation is arrayLike
    console.log(mutation[0].target.classList.contains(activeClass));
    if(mutation[0].target.classList.contains(activeClass)){
        numberObserver.disconnect();
        animateNumbers();
    }
        
}
const observerTarget = document.querySelector('.numbers');

//MutationObserver receives a callback
const numberObserver = new MutationObserver(handleMutation);
numberObserver.observe(observerTarget, {attributes: true});