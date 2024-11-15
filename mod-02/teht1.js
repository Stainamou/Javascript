const prompt = require('prompt-sync')();

let numbers = []

for (let i = 1; i <= 5; i++){
    let num = Number(prompt("Enter a number: "));
    numbers.push(num);
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`Numbers in reverse: ${numbers[i]}`);
}