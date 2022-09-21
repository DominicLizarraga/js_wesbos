// console.log('almost')

const wes = document.querySelector('.wes')

// console.log(wes)

wes.addEventListener('click', function(e) {
    e.preventDefault()
})

const form = document.querySelector('[name="signup"]')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e.currentTarget.name.value)
    console.log(e.currentTarget.email.value)

})