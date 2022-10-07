const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const cellsX = 2
const cellsY = 2
const width = window.innerWidth
const height = window.innerHeight
const wallSize = 2
const borderSize = 1
const ballVelocity = 1

const unitLengthX = width / cellsX
const unitLengthY = height / cellsY

console.log('width: ' + width)
console.log('height: ' + height)

const engine = Engine.create()
engine.world.gravity.y = 0 // disable gravity
const { world } = engine
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height
  }
})

Render.run(render)
Runner.run(Runner.create(), engine)

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, borderSize, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, borderSize, { isStatic: true }),
  Bodies.rectangle(0, height / 2, borderSize, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, borderSize, height, { isStatic: true }),
]
World.add(world, walls)

// Maze Generation
// const grid = []
// for (let i = 0; i < 3; i++) {
//   grid.push([]) // three rows of arrays
//   for (let j = 0; j < 3; j++) {
//     grid[i].push(false)
//   }
// }
// another way to make it is:
const grid = Array(cellsY).fill(null).map(() => Array(cellsX).fill(false)) // row then columns

// Grids
const verticals = Array(cellsY).fill(null).map(() => Array(cellsX - 1).fill(false))
const horizontals = Array(cellsY - 1).fill(null).map(() => Array(cellsX).fill(false))

const startRow = Math.floor(Math.random() * cellsY)
const startColumn = Math.floor(Math.random() * cellsX)

// shuffle neighbor array
const shuffle = (arr) => {
  let counter = arr.length

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = arr[counter]
    arr[counter] = arr[index]
    arr[index] = temp
  }

  return arr
}

const stepThroughCell = (row, column) => {
  // If i have visited the cell, then return
  if (grid[row][column] === true) {
    return
  }

  // Mark the cell as visited
  grid[row][column] = true

  // Assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left'],
  ])

  // For each neighbor...
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor

    // See if that neighbor is out of bounds - if it is, then just continue loop
    if (nextRow < 0 || nextColumn >= cellsX || nextColumn < 0 || nextRow >= cellsY) {
      continue
    }

    // If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue
    }

    // Remove a wall from either horizontal/vertical
    // vertical
    if (direction === 'left') {
      verticals[row][column - 1] = true
    } else if (direction === 'right') {
      verticals[row][column] = true
    }
    // horizontal
    if (direction === 'up') {
      horizontals[row - 1][column] = true
    } else if (direction === 'down') {
      horizontals[row][column] = true
    }

    // Visit that next cell
    stepThroughCell(nextRow, nextColumn)
  }
}

stepThroughCell(startRow, startColumn)
// console.log(grid)
// console.log(verticals)
// console.log(horizontals)

// Draw maze walls
// Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      wallSize,
      { isStatic: true,
        label: 'wall',
        render: {
          fillStyle: 'gray'
        }
      }
    )
    World.add(world, wall)
  })
})

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return
    }

    const wall = Bodies.rectangle(
      unitLengthX + unitLengthX * columnIndex,
      unitLengthY / 2 + rowIndex * unitLengthY,
      wallSize,
      unitLengthY,
      { isStatic: true,
        label: 'wall',
        render: {
          fillStyle: 'gray'
        }
      }
    )
    World.add(world, wall)
  })
})

// Create goal (end)
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.50,
  unitLengthY * 0.50,
  {
    isStatic: true,
    label: 'goal',
    render: {
      fillStyle: 'green'
    }
  }
)
World.add(world, goal)

// Playing ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4
const ball = Bodies.circle(
  unitLengthX / 2,
  unitLengthY / 2,
  ballRadius,
  {
    label: 'ball',
    render: {
      fillStyle: 'blue'
    }
  }
)
World.add(world, ball)

// WASD
document.addEventListener('keydown', event => {
  const { x, y } = ball.velocity

  if (event.keyCode === 87) {
    Body.setVelocity(ball, { x, y: y - ballVelocity })
  }
  if (event.keyCode === 65) {
    Body.setVelocity(ball, { x: x - ballVelocity, y })
  }
  if (event.keyCode === 83) {
    Body.setVelocity(ball, { x, y: y + ballVelocity })
  }
  if (event.keyCode === 68) {
    Body.setVelocity(ball, { x: x + ballVelocity, y })
  }
})

// Win Condition
Events.on(engine, 'collisionStart', event => {
  event.pairs.forEach((collision) => {
    const labels = ['ball', 'goal']

    if (labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
      console.log("You win!")
      document.querySelector('.winner').classList.remove('hidden')
      engine.world.gravity.y = 1 // turn gravity on
      world.bodies.forEach(body => {
        if (body.label === 'wall') {
          Body.setStatic(body, false)
        }
      })
    }
  })
})
