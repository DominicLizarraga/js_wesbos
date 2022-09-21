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

// function starFound() {
//     console.log('⭐️✨')
// }

// function handleBuyButton(btn) {
//     btn.addEventListener('click', starFound)
// }

const allButtons = document.querySelectorAll('.buy')

// allButtons.forEach(handleBuyButton)


// allButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log('💎')
//     })
// }) // with arrow functions

function handleBuyButtonClick(event) {
    // console.log("you're buying")
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.dataset)
    //  console.log(event.target.dataset.price)
    const button = event.target;
    console.log(button.textContent)
    // to stop event bubbling up
    event.stopPropagation();
}


allButtons.forEach(function(btn) {
    btn.addEventListener('click', handleBuyButtonClick)
})

window.addEventListener('click', function() {
    console.log('YOU CLICKED THE WINDOW!')
})

const photo = document.querySelector('.photo')
// console.log(photo)

photo.addEventListener('mousemove', function(e) {
    // console.count(e.currentTarget)
    console.log(this)
})
