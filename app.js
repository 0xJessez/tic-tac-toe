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
var knot = document.createElement('div')
var innerKnot = document.createElement('div')
knot.id = 'outer-circle'
innerKnot.id = 'inner-circle'
knot.appendChild(innerKnot)

var cross1 = document.createElement('div')
var cross2 = document.createElement('div')
cross1.classList.add('cross1')
cross2.classList.add('cross2')
cross1.appendChild(cross2)

var statusBar = document.querySelector('.statusBar')

var count = 0

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
var winCon = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Game logic
grid.addEventListener('click', function (event) {
    box = event.target
    if(box.className === 'box' && count % 2 === 0) {
        box.appendChild(knot.cloneNode(true))
        // box.appendChild(cross1.cloneNode(true))
        box.classList.add('o')
        winCon.splice(box.id.slice(-1)-1, 1, 1)
        count++
        console.log(count)

    } else if (box.className === 'box' && count % 2 !== 0) {
        box.appendChild(cross1.cloneNode(true))
        box.classList.add('x')
        winCon.splice(box.id.slice(-1)-1, 1, 2)
        count++
        console.log(count)
    }
    // if (box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' || box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' || box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' || box1.className === 'box o' && box2.className === 'box o' && box3.className === 'box o' ||) {
    //     statusBar.textContent = "Player 1 WINS"
    // } 
})

// wincon loops


