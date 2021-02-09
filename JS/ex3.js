console.log('Q3.Simple calculation');

let num1 = Number(prompt("Let's calculate\nEnter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (Number.isInteger(num1) && Number.isInteger(num2)) {
    console.log("sum= " + (num1 + num2));
    console.log("difference= " + (num1 - num2));
    console.log("product= " + num1 * num2);
    console.log("quotient= " + num1 / num2);
    console.log("remainder= " + num1 % num2);
} else {
    console.log('invalid input')
}