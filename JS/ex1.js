console.log('Q1.Class Standing');
const name = prompt('Enter your name:');
let unit = Number(prompt('enter number of units completed in college:'));

console.log('Hello ' + name)
if (unit >= 0) {
    if (unit >= 0 && unit <= 30) {
        console.log("Your grade standing is Freshman");
    } else {
        if (unit > 30 && unit <= 60) {
            console.log("Your grade standing is Sophomore");
        } else {
            if (unit > 60 && unit <= 90) {
                console.log("Your grade standing is Junior");
            } else {
                if (unit > 90) {
                    console.log("Your grade standing is Senior");
                } else {
                    console.log('not valid');
                }
            }

        }
    }
} else {
    console.log('Enter valid number of units')

}