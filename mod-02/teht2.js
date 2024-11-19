const names = []

const number = Number(prompt("What is the number of participants?: "))

for (let i = 0; i < number; i++) {
    const name = prompt("What are the names of the participants?: ");
    names.push(name);
}

names.sort();

let list = "<ol>";
names.forEach(name => {
    list += `<li>${name}</li>`;
});
list += "</ol>";

document.querySelector('#names').innerHTML = list;