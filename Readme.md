### Tetris project

I've enhanced my JavaScript skills by incorporating the following functions and techniques into my code:

- querySelector()
- addEventListener()
- Array.from()
- Math.floor()
- forEach()
- classList
- setInterval()
- clearInterval()
- style.backgroundImage
- getElementByClassName()
- splice()
- some()
- concat()
- appendChild()
- Arrow Functions

These tools have allowed me to develop more efficient and cleaner code, improving the quality and functionality of my projects.

# Project Presentation

![](./images/Tetris%20Game.gif)

## Important Notes

- Application of Two-Dimensional Tetrominos in Programming
```sh
const lTectromino = [
    [1 ,GRID_WIDTH +1 ,GRID_WIDTH *2 +1 ,2],
    [GRID_WIDTH,GRID_WIDTH +1,GRID_WIDTH+2,GRID_WIDTH*2+2],
    [1,GRID_WIDTH+1,GRID_WIDTH*2+1,GRID_WIDTH*2],
    [GRID_WIDTH,GRID_WIDTH*2,GRID_WIDTH*2+1,GRID_WIDTH*2+2]
]
const zTetromino = [
    [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
    [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
  ]
  const tTetromino = [
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
    [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
  ]

const oTetromino = [
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
  ]
  const iTetromino = [
    [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
    [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
  ]

const theTetrominoes =[lTectromino,zTetromino,tTetromino,oTetromino,iTetromino]
```

 - Handling Keyboard Events for Movement Control in a Game
 ```sh
 function control(e) {
    if (e.key === "ArrowRight")
    moveright()
else if (e.key === "ArrowUp")
rotate()
else if (e.key === "ArrowLeft")
moveleft()
else if (e.key === "ArrowDown")
moveDown()
}
 ```
- Horizontal Movement Functions with Collision Prevention in a Game
 ```sh
  function moveright() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if (!isAtRightEdge) currentPosition += 1
    if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition -= 1
    }
    draw()
  }

  
  function moveleft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if (!isAtLeftEdge) currentPosition -= 1
    if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition += 1
    }
    draw()
  }
 ```
  - These notes are intended to assist you with any questions regarding the game's functionality. While there are other important components, I've chosen to emphasize these points as they were areas that I personally found challenging to grasp.

  ## Tetris-CSS
I will focus solely on the use of global styles in CSS
```sh
.block {
    background-image:url(../images/blue_block.png) ;
}
.block2 {
    background-image: url(../images/purple_block.png);
}
.block3 {
    background-image: url(../images/green_block.png);
}
.block4 {
    background-image: url(../images/navy_block.png);
}
.block5 {
     background-image: url(../images/pink_block.png);
}
.end {
    background-color: #d8edea;
}
```