const dogs = []

for (let i = 0; i < 6; i++) {
    const dog_name = prompt("Give the names of 6 of the dogs: ")
    dogs.push(dog_name)
}

dogs.sort()

dogs.reverse();

let list = "<ul>";
dogs.forEach(dog_name => {
    list += `<li>${dog_name}</li>`
});
list += "</ul>"

document.querySelector('#dogs').innerHTML = list
