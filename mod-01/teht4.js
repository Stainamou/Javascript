const name = prompt('Enter your name: ');
let number = parseInt(Math.random() * 4) + 1;

if (number === 1) {
    document.querySelector('#House').innerHTML = name + ", you are Gryffindor.";
}
else if (number === 2) {
    document.querySelector('#House').innerHTML = name + ", you are Hufflepuff.";
}
else if (number === 3) {
    document.querySelector('#House').innerHTML = name + ", you are Ravenclaw.";
}
else if (number === 4) {
    document.querySelector('#House').innerHTML = name + ", you are Slytherin.";
}