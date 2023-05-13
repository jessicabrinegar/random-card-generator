window.onload = function() {
    newCard();
};

const cardNumbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const cardSuits = ['bi-suit-diamond-fill','bi-suit-club-fill','bi-suit-spade-fill','bi-suit-heart-fill'];
let button = document.querySelector('.btn');

function randomChoice(array){
    let index = Math.floor(Math.random() * array.length);
    let choice = array[index];
    return choice;
}
let cardNumber;
let cardSuit;
function newCard(){
    let cardNums = document.querySelectorAll('h1');
    let suits = document.querySelectorAll('.bi');
    cardSuit = randomChoice(cardSuits);
    cardNumber = randomChoice(cardNumbers);
    console.log(cardSuit,cardNumber)
    console.log(cardSuit);
    for (let suit of suits){
        let classList = suit.classList;
        suit.classList.replace(classList[1], cardSuit);
    }
    for (let num of cardNums){
        num.innerHTML = cardNumber;
    }

} 
button.addEventListener("click", newCard);

function addCenterIcons(){
    if (cardNumber >= 2 || cardNumber <= 10){
        amount = parseInt(cardNumber);
    }
    else return;
    let center = document.querySelector('.card-body')
    for (let i = 0; i < amount; i++){
        center.innerHTML += `<i class="bi ${cardSuit} fa-6x"></i>`
    }
}