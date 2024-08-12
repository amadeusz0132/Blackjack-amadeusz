let firstCard = 10
let secondCard = 9
// Make above random with math.floor and math.random()*10+2
let mainText = document.getElementById("main-message")
let btnText = document.getElementById("mainbtn")
let sumEl = document.getElementById("sum-el")
let message = ""
let hasBlackjack = false
let isAlive = true
let mode = "start"
let sum = firstCard + secondCard





function btnClick() {
    if (mode == "start" || mode == "restart") {
        // added some reset functionality here
        firstCard = Math.floor(Math.random(1)*10 + 2)
        secondCard = Math.floor(Math.random(1)*10 + 2)
        sum = firstCard + secondCard
        isAlive = true
        hasBlackjack = false
        newGame = true
    } else if (mode == "hit") {
        let nextCard = Math.floor(Math.random()*10 + 2)
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
    sumEl.textContent = sum
}