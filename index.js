// Create variables for the game state
let playerOneScore = 0
let playerTwoScore = 0
let playerOneTurn = true /* it means player 2 is false at this time */

const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function startGame(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"

}

rollBtn.addEventListener("click", function(){
   let randomNumber = Math.floor(Math.random() * 6) + 1  
   console.log(randomNumber)
    if (playerOneTurn){  
        player2Dice.classList.remove("active") 
        player1Dice.classList.add("active")
        player1Dice.textContent = randomNumber
        player2Dice.textContent = "-"
        message.textContent = "Player 2 turn"
        playerOneScore += randomNumber
        player1Scoreboard.textContent = playerOneScore
    } else {
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        player2Dice.textContent = randomNumber
        player1Dice.textContent = "-"
        message.textContent= "Player 1 turn"
        playerTwoScore += randomNumber
        player2Scoreboard.textContent = playerTwoScore
    }
    if(playerOneScore >= 20){
        message.textContent = "Player 1 is the winner!"
        startGame()
    } else if(playerTwoScore >= 20){
        message.textContent = "Player 2 is the winner!"
        startGame()
    }


    playerOneTurn = !playerOneTurn
 })

function reset(){
    playerOneScore = 0
    playerTwoScore = 0
    playerOneTurn = true
    message.textContent = "Player 1 turn"

    player1Dice.textContent = playerOneScore
    player2Dice.textContent = playerTwoScore
    player1Scoreboard.textContent = playerOneScore
    player2Scoreboard.textContent = playerTwoScore
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"

    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")

}

 resetBtn.addEventListener("click", function(){
    reset()})