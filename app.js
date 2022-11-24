// Global DOM variables
var grid = document.querySelector('.grid')
var box = document.querySelectorAll('.box')
var nought = document.createElement('div')
var statusBar = document.querySelector('.statusBar')
var reset = document.querySelector('.reset')
var p1GamesWon = document.querySelector('.p1TallyNum')
var p2GamesWon = document.querySelector('.p2TallyNum')

// // Modal items
var playAgain = document.querySelector('.playAgain')
var playAgainYes = document.querySelector('.playAgainBtnYes')
var playAgainNo = document.querySelector('.playAgainBtnNo')
var rules = document.querySelector('.rules')
var openRules = document.querySelector('.rulesBtn')
var closeRules = document.querySelector('.close')

// Global variables
var winCon = [[0, 0, 0], [0, 0, 0], [0, 0, 0]] // Array to track player moves to check win conditions
var turnCount = 0
var p1Win = false
var p2Win = false
var draw = false

// Grid design variables
var innerNought = document.createElement('div')
nought.id = 'outer-circle'
innerNought.id = 'inner-circle'
nought.appendChild(innerNought)

var cross1 = document.createElement('div')
var cross2 = document.createElement('div')
cross1.classList.add('cross1')
cross2.classList.add('cross2')
cross1.appendChild(cross2)

// Game logic
grid.addEventListener('click', function (event) {
    var targetBox = event.target
    // console.log(targetBox)
    var boxID = targetBox.id.slice(-1)
    // console.log(boxID)
    if(p1Win !== true && p2Win !== true && draw !== true) {
        if (targetBox.className === 'box' && turnCount % 2 === 0) {
            targetBox.appendChild(nought.cloneNode(true))
            targetBox.classList.add('o')
            turnCount++
            // console.log(turnCount)

            statusBar.textContent = 'Player 2 go!'

            if(boxID <= 3) {
                winCon[0][boxID-1] = 1
            } else if (boxID <= 6) {
                winCon[1][boxID-4] = 1
            } else {
                winCon[2][boxID-7] = 1
            }
        } else if (targetBox.className === 'box' && turnCount % 2 !== 0) {
            targetBox.appendChild(cross1.cloneNode(true))
            targetBox.classList.add('x')
            turnCount++
            // console.log(turnCount)

            statusBar.textContent = 'Player 1 go!'

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
            p1GamesWon.textContent = Number(p1GamesWon.textContent) + 1
            playAgain.style.display = 'block'
        } else if (p2Win === true) {
            statusBar.textContent = 'Player 2 Wins!'
            p2GamesWon.textContent = Number(p2GamesWon.textContent) + 1
            playAgain.style.display = 'block'
        } else if (draw === true) {
            statusBar.textContent = 'It\'s a draw'
            playAgain.style.display = 'block'
        }
    }
})

// Make board oppaque background cover when play again box pops up

function checkWin () {

    // Checks for horizontal wins

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

    // Checks for vertical wins

    for (var i = 0; i < 3; i++) {
        var playerMoves = 0
        var playerWin = 0
        for (var j = 0; j < 3; j++) {
            if (winCon[j][i] !== 0) {
                playerMoves++
            }
            playerWin += winCon[j][i]
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
    }

    // Checks for diagonal wins

    var diag1Move = 0 // represents the number of player selections on the first diagonal [0][0], [1][1], [2][2]
    var diag1Win = 0 // sum of the first diagonal
    var diag2Move = 0
    var diag2Win = 0

    for (var i = 0; i < 3; i++) {
        if (winCon[i][i] !== 0) {
            diag1Move++
        }
        diag1Win += winCon[i][i]
        // console.log(diag1Move)
        // console.log(diag1Win)

        if (winCon[i][2-i] !== 0) {
            diag2Move++
        }
        diag2Win += winCon[i][2-i]
        // console.log(diag2Move)
        // console.log(diag2Win)

    }
    if (diag1Move === 3) {
        if (diag1Win === 3) {
            p1Win = true
        } else if (diag1Win === 6) {
            p2Win = true
        } else if (turnCount === 9) {
            draw = true
        }
    } 
    if (diag2Move === 3) {
        if (diag2Win === 3) {
            p1Win = true
        } else if (diag2Win === 6) {
            p2Win = true
        } else if (turnCount === 9) {
            draw = true
        }
    }
}

// Other buttons

// Reset 
reset.addEventListener('click', function (event) {
    statusBar.textContent = 'Player 1 go!'
    p1GamesWon.textContent = '0'
    p2GamesWon.textContent = '0'
    playAgain.style.display = 'none'
    winCon = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    turnCount = 0
    p1Win = false
    p2Win = false
    draw = false
    for (var i = 0; i < 9; i++) {
        removeAllChildNodes(box[i])
        box[i].className = 'box'
    }
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Play Again

playAgainYes.addEventListener('click', function (event) {
    playAgain.style.display = 'none'
    statusBar.textContent = 'Player 1 go!'
    winCon = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    turnCount = 0
    p1Win = false
    p2Win = false
    draw = false
    for (var i = 0; i < 9; i++) {
        removeAllChildNodes(box[i])
        box[i].className = 'box'
    }
})

playAgainNo.addEventListener('click', function (event) {
    playAgain.style.display = 'none'
    for (var i = 0; i < 9; i++) {
        box[i].className = 'box z'
    }
})

openRules.addEventListener('click', function (event) {
    rules.style.display = 'block'
})

closeRules.addEventListener('click', function (event) {
    rules.style.display = 'none'
})

// p1 picture select

var p1Picture = document.querySelector('.p1CharImg img')
var p1PictureSelect = document.querySelector('.p1Select')
p1Picture.addEventListener('click', function (event) {
    p1PictureSelect.style.display = 'grid'
})

p1PictureSelect.addEventListener('click', function (event) {
    var targetPicture = event.target
    p1Picture.src = targetPicture.src
    p1PictureSelect.style.display = 'none'  
})

// p2 picture select

var p2Picture = document.querySelector('.p2CharImg img')
var p2PictureSelect = document.querySelector('.p2Select')
p2Picture.addEventListener('click', function (event) {
    p2PictureSelect.style.display = 'grid'
})

p2PictureSelect.addEventListener('click', function (event) {
    var targetPicture = event.target
    p2Picture.src = targetPicture.src
    p2PictureSelect.style.display = 'none'  
})