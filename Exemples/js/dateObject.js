const today = new Date();

today.getDate()//day of month
today.getDay();//week day 0 = sunday and 6 saturday
today.getMonth();//0-jan to 11- dec
today.getFullYear(); //year
today.getHours();//hour
today.getMinutes();//minute
today.getTime();//miliseconds since 1970
today.getUTCHours(); //zulu hour
today.getUTCHours() - 3; //Brasilia - Brazil time

const now = new Date();
const chrismas = new Date('Dec 24 2020 23:59');
const daysToCrhismas = milisecToDay(chrismas.getTime() - now.getTime());
console.log(daysToCrhismas + " days to Christmas");
function milisecToDay (time) {
    return Math.floor(time / (24 * 60 * 60 * 1000));
}