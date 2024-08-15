let firstCard = 10
let secondCard = 9
// Make above random with math.floor and math.random()*10+2
let mainText = document.getElementById("main-message")
let btnText = document.getElementById("mainbtn")
let sumEl = document.getElementById("sum-el")
let card = document.getElementsByClassName("card")

let cardVal = 0
let message = ""
let hasBlackjack = false
let isAlive = true
let mode = "start"
let sum = firstCard + secondCard
let t = 1 //parameter t counting card number

function btnClick() {
    if (mode == "start" || mode == "restart") { 
        // added some reset functionality here
        t = 1
        cardVal = Math.floor(Math.random(1)*10 + 2)
        showCard(t, cardVal)
        t = 2
        cardVal = Math.floor(Math.random(1)*10 + 2)
        showCard(t, cardVal)

        sum = firstCard + secondCard
        isAlive = true
        hasBlackjack = false
        newGame = true

        //trying to make cards appear
    } else if (mode == "hit") {
        t += 1
        let nextCard = Math.floor(Math.random()*10 + 2)
        showCard(t)
        sum = sum + nextCard 
    } else {}

    if (sum <= 20) {
        message = "Hit?"
        mode = "hit"
        btnText.textContent = "Hit"
    } else if (sum === 21) {
        message = "BLACKJACK!!!"
        hasBlackjack = true
        btnText.textContent = "Play again"
        mode = "restart"
    } else {
        message = "womp womp"
        isAlive = false
        btnText.textContent = ":( Play again"
        mode = "restart"
    }
    
    mainText.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function showCard(v, p) { // p is position, v is value
    cardPos = document.getElementById("card" + p)
    card.src += "./spade-cards/" + v + ".png"

}