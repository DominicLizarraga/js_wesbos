console.log("time of truth")

//regular function. The function declaration in a statement always starts with the keyword function.

// function doctorize(firstName) {
//     return `Dr. ${firstName}`
// }

// doctorize("House")

// anonymous function

// function(firstName) {
//     return `Dr. ${firstName}`
// }


// Function expression: starts with "const" and this is affected by Hoisting

// const doctorize = function(firstName) {
//     return `Dr. ${firstName}`
// }

// arrow functions has a fat arrow => followed by a pair of parentesis

// const doctorize = (firstName) => {
//     return `Dr. ${firstName}`

// }

// console.log(doctorize('Housee.'))

// const inchToCm = (inches) => {
//     return inches * 2.54
// }

// const inchesToCm = (inches) => inches * 2.54;

// function add(a, b = 3){
//     const total = a + b;
//     return total;
// }

// const add = (a, b = 3) => a + b; 

// console.log(add(1, 8))
// console.log(add(1))




// IIEF

// (function() {
//     console.log('Runngin IIFE');
//     return 'you\'re cool';
// })();


// Methods!! a method is a functions that lives inside an Object

const wes = {

    name: 'wes bos',
    // Method!
    sayHi: function() {
        console.log('hey wes');
        return 'Hey Wes';
    },

    // shorthand method

    yellHi(){
        console.log("HELLLO")
    },

    // with arrow function

    decirHola: () => {
        console.log("Hola!")
    }


}