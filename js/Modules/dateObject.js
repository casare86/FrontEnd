export default function initWorkingHour(){
    const busisnessTime = document.querySelector('[data-week]');
    const workingDays = busisnessTime.dataset.week.split(',').map(Number);
    const workingHours = busisnessTime.dataset.hours.split(',').map(Number);
    console.log(workingDays);

    const now = new Date();
    const today = now.getDay();
    const hour = now.getHours();
    
    //check if its a working day
    const openDay = workingDays.indexOf(today) !== -1;
    const openNow = (hour >= workingHours[0] && hour < workingHours[1]);
    
    (openDay && openNow) ? busisnessTime.classList.add("working") : busisnessTime.classList.add("closed");
}



