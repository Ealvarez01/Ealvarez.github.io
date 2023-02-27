//these are global variables so they can be shared with other functions
//these will assign a random number to the var on page start or when refreshed
var theTreasure = Math.floor(Math.random() * 9)
var theBomb = Math.floor(Math.random() * 9) 


//this function will check if theTreasure and theBomb are the same number
//and if they are, it will re-roll theBomb to a new number
if(theTreasure === theBomb){
    console.log("error! value collision!")

    while (theTreasure === theBomb){
        console.log("re-rolling theBomb!")
        theBomb = Math.floor(Math.random() * 9)
    }

    console.log("new values are:")
    checkGame()
}


//these global variables link their value to the html page element
//so we can see it on the live webpage
let scoreBoardEl = document.getElementById("scoreBoard-el")
let sharkDeathsEl = document.getElementById("sharkDeaths-el")


//these variables keep track of how many times you find the
//treasure or the shark. it will reset if you refresh the page.
let scoreBoard = 0
let sharkDeaths = 0


//this TEST function will return the values of theTreasure and theBomb
//this  is used so YOU can see the values behind the scenes
//for troubleshooting purposes
const checkGame = () => {
    console.log("treasure = " + theTreasure)
    console.log("bomb = " + theBomb)
}


//this TEST line will show us what numbers theTreasure and theBomb are 
checkGame()


//this function will force the webpage to reload, after win conditions are met by finding three sharks or treasures
const reloadPage = (parameter) => {
    location.reload()
}


//this is the restart button function. it will restart
//the values of theTreasure and theBomb, and it will also
//reset the icons displayed on the screen
const restart = () => {
    alert('Restarting the game! 🐠')

    document.getElementById(0).innerHTML = "🌊"
    document.getElementById(1).innerHTML = "🌊"
    document.getElementById(2).innerHTML = "🌊"
    document.getElementById(3).innerHTML = "🌊"
    document.getElementById(4).innerHTML = "🌊"
    document.getElementById(5).innerHTML = "🌊"
    document.getElementById(6).innerHTML = "🌊"
    document.getElementById(7).innerHTML = "🌊"
    document.getElementById(8).innerHTML = "🌊"

    theTreasure = Math.floor(Math.random() * 9)
    theBomb = Math.floor(Math.random() * 9)

    if(theTreasure === theBomb){
        console.log("error! value collision!")
    
        while (theTreasure === theBomb){
            console.log("re-rolling theBomb!")
            theBomb = Math.floor(Math.random() * 9)
        }
    }

    //this test line will show us what numbers theTreasure and theBomb are 
    console.log("Game reset:")
    checkGame()
}


//this function will add 1 treasure found to the score bord
function treasureScore() {
    scoreBoard += 1
    scoreBoardEl.textContent = scoreBoard 
}


//this function will add 1 treasure found to the score board
function sharkScore(){
    sharkDeaths += 1
    sharkDeathsEl.textContent = sharkDeaths
}

//this is the function for pressing the treasure buttons, if you select
//the button whose location is equal to the theTreasure or theBomb
//it will change the graphic of the button and alert you if
//you win/lose and also update the scoreboard
const treasure = (location) => {

    if(location === theTreasure){
        document.getElementById(location).innerHTML = "🏆"
        alert('🏆 You found the treasure! 🏆')

        treasureScore()

        //refreshes the page if you find three treasures
        if (scoreBoard === 3){
            alert('🏆 You win! 🏆')
            reloadPage()
          }

    }
    else if(location === theBomb){
        document.getElementById(location).innerHTML = "🦈"
        alert('🦈 Oh no! A shark!!! 🦈')

        sharkScore()

        //refreshes the page if you find three sharks
        if(sharkDeaths === 3){
            alert('🦈 You lose... 🦈')
            reloadPage()
          }

    }
    else{

        document.getElementById(location).innerHTML = "🌊"

    }

  }