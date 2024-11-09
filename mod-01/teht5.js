let year = parseInt(prompt('Enter the year number: '))

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    document.querySelector('#leapyear').innerHTML = year + " is a leap year.";
}
else {
    document.querySelector('#leapyear').innerHTML = year + " is not a leap year.";
}