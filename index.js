

let cards = [0]
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let PlayerEl = document.getElementById("player-el")
let player = {
    name: "Joe",
    chips: 145,
}

player.sayHello()
PlayerEl.textContent = player.name + ": $" + player.chips



function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 + 1)
    if (randomNumber < 2) {
        return 11
    } else if (randomNumber === 1) {
        return 11 
    } else {
        return randomNumber
    }
}    


function startGame() {
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]
        if (i < cards.length - 1) {
            cardsEl.textContent += " & "
        }
    }
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Want new card?"
    } else if (sum === 21) {
        message = "Woohoo! Blackjack"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're Out!"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
} }



function newGame() {
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    hasBlackJack = false;
    isAlive = true;
    message = "";
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    messageEl.textContent = "Want to play?";
}





// let airbnbListing = {
//     title: "Castle Fort",
//     guests: 4,
//     isAvailable: false,
//     price: "$149",
//     tags: ["1 Bedroom", "2 Beds"]
// }

// console.log(airbnbListing.guests)
// console.log(airbnbListing.tags[1])





// let course = {
//     title: "Learn CSS Grid For Free",
//     lessons: 16,
//     creator: "Joe Slack",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)





// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     reccomendMovie()
// }

// function reccomendMovie() {
//         console.log("Hey check out this new film!")
//     }





// let hasCompletedCourse = true
// let givesCertificate = true


// if (hasCompletedCourse === true && givesCertificate === true) {
//     // if (givesCertificate === true) {
//     //     generateCertificate()
//     // }
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate...")
// }


// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution...")
// }


// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())




// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player1Time < player2Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)


// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalRaceTime = getTotalRaceTime()
// console.log(totalRaceTime)



// let sentence = ["Hello", "my", "name", "is", "Joe"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++)

// greetingEl.textContent += sentence[i] + " "


// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i ++)

// console.log(cards[i])


// let messages = [
//     "iuerhgieorhe",
//     "iuerhgieerflerjfoporhe",
//     "ewfewfiuerhgieorhe",
//     "iuerhgieoergperkrhe",
//     "iuerhgieorherefweweefwfwffewfe"
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }