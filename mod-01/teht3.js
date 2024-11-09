let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let num3 = Number(prompt("Enter the third number: "));

document.querySelector('#sum').innerHTML = num1 + num2 + num3;
document.querySelector('#product').innerHTML = num1 * num2 * num3;
document.querySelector('#average').innerHTML = (num1 + num2 + num3) / 3;