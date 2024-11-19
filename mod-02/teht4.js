const prompt = require('prompt-sync')();

numbers = []

while (true) {
    const number = Number(prompt("Enter a number, enter 0 to stop: "))
    if (number === 0) {
        break
    }
    numbers.push(number)
}

numbers.sort((a, b) => b- a);

console.log("The numbers from largest to smallest are: " + numbers)
