function calculateBill () {
    // function body
 const total = 10 * 1.13
 return total // this is internal variable and after the function body is no longer existing
}

// function calling
const myTotal = calculateBill();
console.log(`My total receipt is${myTotal}`)