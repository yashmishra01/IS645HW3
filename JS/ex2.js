console.log('Q2.Following Day');
const day = prompt('Enter the 1st three letters in lower case of a day of the week:');

if (day == 'sun' || day == 'mon' || day == 'tue' || day == 'wed' || day == 'thu' || day == 'fri' || day == 'sat') {
    switch (day) {
        case ('sun'):
            console.log("You entered: Sunday\nThe following day is: Monday")
            break;
        case ('mon'):
            console.log("You entered: Monday\nThe following day is: Tuesday")
            break;
        case ('tue'):
            console.log("You entered: Tuesday\nThe following day is: Wednesday")
            break;
        case ('wed'):
            console.log("You entered: Wednesday\nThe following day is: Thursday")
            break;
        case ('thu'):
            console.log("You entered: Thursday\nThe following day is: Friday")
            break;
        case ('fri'):
            console.log("You entered: Friday\nThe following day is: Saturday")
            break;
        case ('sat'):
            console.log("You entered: Saturday\nThe following day is: Sunday")
            break;
        default:
            text = "wrong input";
    }
} else {
    console.log(' Wrong input. Enter the 1st three letters in lower case of a day of the week')
}