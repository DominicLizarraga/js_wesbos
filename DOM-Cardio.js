// Make a div

console.log('working')

const div = document.createElement('div')
// add a class of wrapper to it
div.classList.add('wraper')
// console.log(div);
// put it into the body
document.body.appendChild(div)
// make an unordered list
const ul = ` <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

div.innerHTML = ul;

// create an image

const img = document.createElement('img')

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

img.src = 'https://picsum.photos/200/300';
img.width = 250;
img.alt = 'cute puppy';

div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
    <div class='myDiv'>
        <p>Paragraph one</p>
        <p>Paragraph two</p>
    </div>
`;

const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
// remove the first paragraph
const myDiv = document.querySelector('.myDiv')
myDiv.classList.add('warning')
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard (name, age, height){
    const html = `
    <div class="playerCard">
       <h2>${name} — ${age}</h2>
       <p>Their ${height} is and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
        <button class="delete" type="button">&times delete</button>
       </div>`
     return html
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div')
cards.classList.add('cards')
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('juan', 12, 150)
cardsHTML += generatePlayerCard('roman', 25, 180)
cardsHTML += generatePlayerCard('Ed', 51, 155)

// append those cards to the div
cards.innerHTML = cardsHTML

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// console.log(buttons)

// select all the buttons!

const buttons = document.querySelectorAll('.delete')

// make out delete function

function deleteCard(event) {
    // console.log('DELETEEEE')
    // console.log(event.target)
    const buttonGotClicked = event.target
    buttonGotClicked.closest('.playerCard').remove()
}
// loop over them and attach a listener

buttons.forEach(button => button.addEventListener('click', deleteCard))