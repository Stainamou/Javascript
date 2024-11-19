const prompt = require('prompt-sync')();

numbers = []

while (true) {
    const number = Number(prompt("Enter a number. Entering the same number will stop the program: "))
    if (numbers.includes(number)) {
        numbers.sort((a, b) => a - b);
        console.log(numbers);
        break;
    } else {
        numbers.push(number);
    }
}