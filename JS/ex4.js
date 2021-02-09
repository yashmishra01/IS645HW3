console.log('Q4.Password');
let i;
for (i = 1; i <= 3; i++) {
    let pwd = prompt('Enter a valid password: ');

    if (pwd == "secret") {
        console.log('you entered the correct password after ' + i + ' attempts')
        break;
    } else if (i < 3) {
        console.log('Wrong Password!');
    } else {
        console.log('Your account is locked.You failed to enter the correct password after ' + i + ' attempts');
    }
}