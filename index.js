let firstCard = 10
let secondCard = 11
// Make above random with math.floor and math.random()*10+2
let mainText = document.getElementById("main-message")
let btnText = document.getElementById("mainbtn")
let sumEl = document.getElementById("sum-el")
let message = ""
let hasBlackjack = false
let isAlive = true
let sum = firstCard + secondCard





function btnClick() {
    if (sum <= 20) {
        message = "Hit?"
    } else if (sum === 21) {
        message = "BLACKJACK!!!"
        hasBlackjack = true
        btnText.textContent = "Play again"
    } else {
        message = "womp womp"
        isAlive = false
        btnText.textContent = ":( Play again"
    }
    mainText.textContent = message
    sumEl.textContent = sum
}