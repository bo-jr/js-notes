const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3
const width = 600
const height = 600

const engine = Engine.create()
const { world } = engine
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height
  }
})

Render.run(render)
Runner.run(Runner.create(), engine)

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
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
const grid = Array(cells).fill(null).map(() => Array(cells).fill(false)) // row then columns

console.log(grid)

// Grids
const verticals = Array(cells).fill(null).map(() => Array(cells - 1).fill(false))
const horizontals = Array(cells - 1).fill(null).map(() => Array(cells).fill(false))

const startRow = Math.floor(Math.random() * cells)
const startColumn = Math.floor(Math.random() * cells)
console.log("row and column: " + startRow, startColumn)

const stepThroughCell = (row, column) => {
  // If i have visited the cell, then return

  // Mark the cell as visited

  // Assemble randomly-ordered list of neighbors

  // For each neighbor...

  // See if that neighbor is out of bounds

  // If we have visited that neighbor, continue to next neighbor

  // Remove a wall from either horiz/verti

  // Visit that next cell
}

stepThroughCell(startRow, startColumn)
