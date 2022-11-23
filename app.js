// Technical requirements for the game
// 1. Each box (3x3 grid) must be responsive to a click and place the relevant symbol or image in the box
// 2. Player change after each click
// 3. The game must recognise when someone wins

// Coding the requirements
// 1. 
    // .addEventListener to register clicks, this can apply a CSS style or append an element to create the desired effect

// 2.
    // Use a counter to keep track of each player's turns so the game knows who is next
    // If statements can be used to determine whose turn and which symbol / effect to apply. i.e. if both players have gone once use player 1's effect or if player 1 has gone use player 2's effect
    // Counter can be included as a variable inside the event function

// 3. 
    // There are 12 possible combinations of winning and this can be tested for after each click using an if function
    // Each box will need to be tracked to run above if function, can be done using a unique ID for each box


// Declaring general grid elements / variables
var grid = document.querySelector('.grid')
var box = document.querySelector('.box')
var nought = document.createElement('div')
var innerNought = document.createElement('div')
nought.id = 'outer-circle'
innerNought.id = 'inner-circle'
nought.appendChild(innerNought)

var cross1 = document.createElement('div')
var cross2 = document.createElement('div')
cross1.classList.add('cross1')
cross2.classList.add('cross2')
cross1.appendChild(cross2)

var statusBar = document.querySelector('.statusBar')

var turnCount = 0

// Declaring individual boxes
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')
var box3 = document.querySelector('#box3')
var box4 = document.querySelector('#box4')
var box5 = document.querySelector('#box5')
var box6 = document.querySelector('#box6')
var box7 = document.querySelector('#box7')
var box8 = document.querySelector('#box8')
var box9 = document.querySelector('#box9')

// Array to track player moves
// var winCon = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var winCon = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
// 1: player 1 square; 2: player 2 square

var p1Win = false
var p2Win = false
var draw = false

// Game logic
grid.addEventListener('click', function (event) {
    box = event.target
    var boxID = box.id.slice(-1)
    // console.log(boxID)
    if(box.className === 'box' && turnCount % 2 === 0) {
        box.appendChild(nought.cloneNode(true))
        // box.appendChild(crNought.cloneNode(true))
        box.classList.add('o')
        
        turnCount++
        // console.log(turnCount)

        if(boxID <= 3) {
            winCon[0][boxID-1] = 1
        } else if (boxID <= 6) {
            winCon[1][boxID-4] = 1
        } else {
            winCon[2][boxID-7] = 1
        }
        // winCon.splice(box.id.slice(-1)-1, 1, 1)


    } else if (box.className === 'box' && turnCount % 2 !== 0) {
        box.appendChild(cross1.cloneNode(true))
        box.classList.add('x')
        // winCon.splice(box.id.slice(-1)-1, 1, 2)
        turnCount++
        // console.log(turnCount)

        if(boxID <= 3) {
            winCon[0][boxID-1] = 2
        } else if (boxID <= 6) {
            winCon[1][boxID-4] = 2
        } else {
            winCon[2][boxID-7] = 2
        }
    }
    
    checkWin()
    if (p1Win === true) {
        statusBar.textContent = 'Player 1 Wins!'
    } else if (p2Win === true) {
        statusBar.textContent = 'Player 2 Wins!'
    } else if (draw === true) {
        statusBar.textContent = 'It\'s a draw'
    }
})

// if (box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' || box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' || box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' || box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' ||) {
    //     statusBar.textContent = "Player 1 WINS"
    // } 

// wincon loops


// 
function checkWin () {
    for (var i = 0; i < 3; i++) {
        var playerMoves = 0
        var playerWin = 0
        for (var j = 0; j < 3; j++) {
            if (winCon[i][j] !== 0) {
                playerMoves++
            }
            playerWin += winCon[i][j]
            // console.log(playerMoves)
            // console.log(playerWin)
        }
        if (playerMoves === 3) {
            if (playerWin === 3) {
                p1Win = true
            } else if (playerWin === 6) {
                p2Win = true
            } else if (turnCount === 9) {
                draw = true
            }
        }
        // console.log(p1Win)
        // console.log(p2Win)
        // console.log(draw)
    }
}

