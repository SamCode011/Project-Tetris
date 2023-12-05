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