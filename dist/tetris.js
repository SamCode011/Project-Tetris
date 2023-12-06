document.addEventListener('DOMContentLoaded',() => {
    /*Obtener grid-user*/
    const GRID_WIDTH  = 10
    const GRID_HEIGHT = 20
    const GRID_SIZE   = GRID_WIDTH * GRID_HEIGHT


/*Part-1 */
const grid = createGrid();
let squares = Array.from(grid.querySelectorAll('div'))
const startBtn = document.querySelector('.button')
const hamburgerBtn = document.querySelector(' .toggler')
const menu = document.querySelector('.menu')
const span = document.getElementsByClassName('close')[0]/* elige un elemento no un array */
const scoreDisplay = document.querySelector('.score-display')
const linesDisplay = document.querySelector('.lines-score')
let currentIndex = 0
let currentRotation = 0
const width = 10
let score = 0
let lines = 0
let timerId
let nextRandom = 0
const colors = [
    'url(./images/blue_block.png)',
    'url(./images/pink_block.png)',
    'url(./images/purple_block.png)',
    'url(./images/peach_block.png)',
    'url(./images/yellow_block.png)'
]
   
   
  function createGrid() {
     /* Bucle-elementos creados => Grid_size */
    let grid = document.querySelector(".grid")
    for (let i = 0; i < GRID_SIZE ; i++) {
      let gridElement = document.createElement("div")
      grid.appendChild(gridElement)
    }
    /* Establecer la grid base */
    for (let i = 0 ; i < GRID_WIDTH;i++) {
        let gridElement = document.createElement('div')
        gridElement.setAttribute('class','block3')/* aplica atributo de la clase block3 */
        grid.appendChild(gridElement)

    }

    let previousGrid = document.querySelector('.previous-grid')
    for (let i = 0;i < 16;i++){
        let gridElement = document.createElement('div')
        previousGrid.appendChild(gridElement);
    }
    return grid ;
}
//Assign functions to keycodes
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

//functions-event touch
function handleTouchStart(event){
  startX = event.touches[0].clientX ;
  startY = event.touches[0].clientY ;
 /*  rotateOnTouch(0,0); */
}
function handleTouchMove(event) {
  let deltaX = event.touches[0].clientX - startX ;
  let deltaY = event.touches[0].clientY - startY ;
  console.log("DeltaX:",deltaX,"DeltaY",deltaY);
//angle-rotation-touch
  /* let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); */

   //Calculate distance for touch
   let distance = Math.sqrt(deltaX **2 +deltaY **2);
   //sensibility
   let sensibility = 10 ;
   //variabl
    let startX,startY ; 

  //main direction-root Ojo sam
  if (Math.abs(deltaX) > Math.abs(deltaY)) {

    //Horizontal movement
    if(deltaX > sensibility) {
      moveright();
    }else if(deltaX < -sensibility) {
      moveleft();
    }

  } else {
    // Vertical movement
    if(deltaY > sensibility){
      moveDown();
    }else {
      /* Up-movement-null */
    }
  }
 
  //Update staring coordinates for next move push
  startX = event.touches[0].clientX ;
  startY = event.touches[0].clientY ;

  event.preventDefault(); // *Notes:prevent the default scrolling behavior 
 //rotation based on touch movement
/*  rotate(angle); */
/* rotateOnTouch(deltaX,deltaY) ; */
}

function rotateOnTouch(/* deltaX,deltaY */) {
  let angle = Math.atan2(/* deltaY, deltaX */) * (180 / Math.PI);
  rotate(angle);
}
function handleTouchEnd(event) {
  console.log('Touch ended!');
}
document.addEventListener('touchend', handleTouchEnd);
document.addEventListener('touchstart',handleTouchStart);
document.addEventListener('touchmove',handleTouchMove);

//the classical behavior is to speed up the block if down button is kept pressed so doing that
document.addEventListener('keydown',control)

//The Tetromioes /* array bidimensional of tetrominoes*/
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

//Randomly Select Tetromino aleatorio
let random =Math.floor(Math.random()*theTetrominoes.length)
let current = theTetrominoes[random][currentRotation]

//move the tetromino moveDown
let currentPosition = 4
//draw the shape 
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('block')
        squares[currentPosition + index].style.backgroundImage = colors[random]
    })
}
//undraw the shape
function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('block')
      squares[currentPosition + index].style.backgroundImage = 'none'
    })
  }
  //move down on loop
  function moveDown() {
    undraw()
    currentPosition = currentPosition += width
    draw()
    freeze()
  }

  startBtn.addEventListener('click', () => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      draw()
      timerId = setInterval(moveDown, 1000)
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
      displayShape()
    }
  })

  //move left and prevent collisions with shapes moving left
  function moveright() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if (!isAtRightEdge) currentPosition += 1
    if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition -= 1
    }
    draw()
  }

  //move right and prevent collisions with shapes moving right
  function moveleft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if (!isAtLeftEdge) currentPosition -= 1
    if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition += 1
    }
    draw()
  }

  //frezze the shape
  function freeze() {
    //if block has settled
    if(current.some(index =>squares[currentPosition +index +width].classList.contains('block3')||squares[currentPosition +index +width].classList.contains('block2'))) {
        //make it block2

        current.forEach(index => squares[index + currentPosition].classList.add('block2'))
        // start a new tetromino falling
        random = nextRandom
        nextRandom = Math.floor(Math.random() * theTetrominoes.length)
        current = theTetrominoes[random][currentRotation]
        currentPosition = 4
        draw()
        displayShape()
        addScore()
        gameOver()
      }
    }
    freeze()
  
    //Rotate the Tetromino
    function rotate() {
      undraw()
      currentRotation++
      if (currentRotation === current.length) {
        currentRotation = 0
      }
      current = theTetrominoes[random][currentRotation]
      draw()
    }
  
    //Game Over
    function gameOver() {
      if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
        scoreDisplay.innerHTML = 'end'
        clearInterval(timerId)
      }
    }
  
    //show previous tetromino in scoreDisplay
    const displayWidth = 4
    const displaySquares = document.querySelectorAll('.previous-grid div')
    let displayIndex = 0/* rastrea la posicion actual en la cuadricula de visualización */
  
    const smallTetrominoes = [
      [1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
      [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
      [1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
      [0, 1, displayWidth, displayWidth + 1], /* oTetromino */
      [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
    ]
  
    function displayShape()/* Muestra la proxima pieza en la cuadricula */ {
      displaySquares.forEach(square => {
        square.classList.remove('block')
        square.style.backgroundImage = 'none'
      })
      smallTetrominoes[nextRandom].forEach(index => {
        displaySquares[displayIndex + index].classList.add('block')
        displaySquares[displayIndex + index].style.backgroundImage = colors[nextRandom]
      })
    }
  
    //Add score
    function addScore() {
        /*nota: verificacion de las filas completas */
      for (currentIndex = 0; currentIndex < GRID_SIZE; currentIndex += GRID_WIDTH) {
        /* creacion de una fila */
        const row = [currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3, currentIndex + 4, currentIndex + 5, currentIndex + 6, currentIndex + 7, currentIndex + 8, currentIndex + 9]
        /* nota:verficacion de las filas completas y actualizacion de puntuacion */
        if (row.every(index => squares[index].classList.contains('block2'))) {
          score += 10
          lines += 1
          scoreDisplay.innerHTML = score
          linesDisplay.innerHTML = lines
          /* nota:eliminacion de la fila y desplazamiento de las celdas superior */
          row.forEach(index => {
            squares[index].style.backgroundImage = 'none'
            squares[index].classList.remove('block2') || squares[index].classList.remove('block')
  
          })
          //splice array
          /*nota: reorganizacion de la cuadricula(splice y concat) */
          const squaresRemoved = squares.splice(currentIndex, width)
          squares = squaresRemoved.concat(squares)
          squares.forEach(cell => grid.appendChild(cell))
        }
      }
    }
  
    //Styling eventListeners para el menu
    hamburgerBtn.addEventListener('click', () => {
      menu.style.display = 'flex'
    })
    span.addEventListener('click', () => {
      menu.style.display = 'none'/*   <button class="close fw-400">X</button> =====> const span line 14 */
    })
  
})