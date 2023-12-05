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

![](./images/Video%20.gif)

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

## CopyRight (c) 2020-2023 Ania Kubow-SamFlores

This project is undertaken for educational and learning purposes, contributing to my professional development. I hope it serves as a guide for your personal projects and professional growth.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*Translation: Ofcourse you can use this for you project! Just make sure to say where you got this from

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.