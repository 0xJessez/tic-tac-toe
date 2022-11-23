# Tic-Tac-Toe
Classic game of Tic-Tac-Toe reimagined using HTML, CSS and Javascript!

Play here - https://0xjessez.github.io/tic-tac-toe/

<img src='https://github.com/0xJessez/tic-tac-toe/blob/main/Tic-Tac-Toe.png' alt='final project design' width='900px'>

## About

The task at hand was to render a game of Tic-Tac-Toe (noughts and crosses) in browser with the necessary game logic to allow for 2 players.

Each player takes turns placing an X or an O in the empty squares by clicking on the grid and a winner is determined when any three symbols match in a line horizontally, vertically or diagonally.

## Planning

1. Layout
- Initial design of the layout ([Initial Wireframing](https://github.com/0xJessez/tic-tac-toe/blob/main/Initial%20wireframing.pdf)) was completed in figma. This allowed me to visualise where each element would sit on the page determined by  HTML / CSS code.

2. Game logic  

*Initial planning*
```
First pass of pseudo-code
1. Each box (3x3 grid) must be responsive to a click and place the relevant symbol or image in the box
- .addEventListener to register clicks, this can apply a CSS style or append an element to create the desired effect

2. Player change after each click
- Use a counter to keep track of each player's turns so the game knows who is next
- If statements can be used to determine whose turn and which symbol / effect to apply. i.e. if both players have gone once use player 1's effect or if player 1 has gone use player 2's effect
- Counter can be included as a variable inside the event function

3. The game must recognise when someone wins
- There are 12 possible combinations of winning and this can be tested for after each click using an if function
- Each box will need to be tracked to run above if function, can be done using a unique ID for each box
```

*Revised game logic*
- After coding out the base game logic, I realised it would be more intuitive to track the location of clicks within an array. Specifically a two dimensional array using 1's and 2's to represent player decisions similiar to how the noughts and cross board looks.

[ [1, 1, 2],
  [2, 2, 1],
  [2, 1, 1] ]

- This allowed me to removed large nested if statements testing for a win condition and replace them with for loops running through array combinations
   
## Technology
- Javascript
- HTML
- CSS

## Challenges
- Understanding how to position items accurately on the page using CSS

## Improvements
- Various CSS visual improvements can be made and are planned i.e. animations on user score as the tally increases

