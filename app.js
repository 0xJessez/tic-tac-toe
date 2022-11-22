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