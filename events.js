// console.log('it works')

const button = document.querySelector('.butts')
// console.log(button)

function gotClicked(){
    console.log('it works!! 🐛')    
}

const newFunction = () => {
    console.log("new function") // using arrow functions
}

button.addEventListener('click', gotClicked)
// button.removeEventListener('click', gotClicked) only can be removed if its a named function not  anonoymous
button.addEventListener('click', newFunction)
button.removeEventListener('click', newFunction)

// console.dir(button) to see more methods

// multiples items

const buyButtons = document.querySelectorAll('.buy')

// buyButtons.forEach(function(buyButton) {
//     buyButton.addEventListener('click', gotClicked)
// })

function starFound() {
    console.log('⭐️✨')
}

function handleBuyButton(btn) {
    btn.addEventListener('click', starFound)
}

const allButtons = document.querySelectorAll('.buy')

allButtons.forEach(handleBuyButton)


allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('💎')
    })
}) // with arrow functions
