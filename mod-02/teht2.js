const prompt = require('prompt-sync')();

const names = []

const number = Number(prompt("What is the number of participants?: "))

for (let i = 0; i < number.length; i++) {
    const name = prompt("What are the names of the participants");
    names.push(name);
}