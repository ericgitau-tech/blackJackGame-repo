// Player object
let player = {
    Name: "Eric",
    Chips: 145
}

// Game variables
let cards = []            // Stores all cards
let sum = 0               // Total sum of cards
let hasBlackJack = false  // If player hits 21
let isAlive = false       // If player is still in game
let message = ""          // Message to display

// DOM elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Correct method (NOT getElementsById)
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

// Generate random card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    // Face cards = 10
    if (randomNumber > 10) {
        return 10
    }
    // Ace = 11
    else if (randomNumber === 1) {
        return 11
    }
    // 2–10 = value as is
    else {
        return randomNumber
    }
}

// Start a new game
function startGame() {
    isAlive = true
    hasBlackJack = false

    // Draw two cards
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

// Update UI and check game status
function renderGame() {

    // Clear old content and print fresh
    cardsEl.textContent = "Cards: "
    
    // Loop through cards and display them properly
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Show the sum
    sumEl.textContent = "Sum: " + sum

    // Game logic
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

// Draw a new card
function newCard() {
    // Player can only draw if still alive and hasn't won
    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard()

        cards.push(card)   // Add card to list
        sum += card        // Update sum

        renderGame()
    }
}
