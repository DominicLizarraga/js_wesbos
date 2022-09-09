console.log("it worked")


// types of variables
// var dog = "snickers"
// let cat = "kitty"
// const car = "Ford"


// types of single, double of back sticks
// var dog = 'snickers'
// let cat = "kitty"
// const car = `Ford`

//concatenation

// var first = "Dom"
// var lastName = "Lizarraga"

// console.log(first + " " + lastName)


//types of data

// SNOB'N'US

// String
// Number (it can be either float or integer)
// Object
// Boolean
// null
// undefined
// Symbol


// numbers

Math.random() // it throws a randome # btw 0 and 1

Math.round(2.3)// 2

Math.round(2.6)// 3

Math.floor(2.3)// 2

Math.ceil(2.3)// 3

const smarties = 20;
const kids = 3;
const result = Math.floor(smarties / kids);
const eachKidGets = `Each kid gets ${result}`
console.log(eachKidGets);

const person = {
    first: "dom",
    lastName: "Lizarraga",
    age: 100
};

console.log(person)
console.log(person.first)


// undefined and null

console.log(person.dog) // undefined when you try to acces a variable that has been created but not set

// null is the value of nothiing

const somethingIsNull = null;


// == checks the value

// === checks the value and type