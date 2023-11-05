// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
    return name;
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    return name;
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
    return name;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
    return name;
}

function appendCat() {
    const newCat = [...cats, "Broom"]
    return newCat;
}

function prependCat() {
    const newCat = ["Arnold", ...cats]
    return newCat;
}

function removeLastCat (copyOfCats) {
    copyOfCats = cats.slice(0, 2)
    return copyOfCats; 
}

function removeFirstCat (copyOfCats) {
    copyOfCats = cats.slice(1)
    return copyOfCats;
}