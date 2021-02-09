console.log('Q6.Following Second ');

let hour = Number(prompt("Enter hour:"));
let min = Number(prompt("Enter minute:"));
let sec = Number(prompt("Enter second:"));
let afterHour = 0;
let afterMin = 0;
let afterSec = 0;
console.log('time input: ' + hour + 'h' + min + 'm' + sec + 's');

if (hour >= 0 && hour <= 23 && min >= 0 && min <= 59 && sec >= 0 && sec <= 59) {
    if (sec == 59) {
        afterSec = 0;
        afterMin = ++min;


    } else {
        afterSec = ++sec;
    }

    if (min >= 59) {
        afterMin = 0;
        afterHour = ++hour;

    } else {
        afterMin = min;
    }
    if (hour >= 23) {
        afterHour = 0;
    } else {
        afterHour = hour;
    }


} else {
    console.log('wrong input');
}

console.log('One second later: ' + afterHour + 'h' + afterMin + 'm' + afterSec + 's');