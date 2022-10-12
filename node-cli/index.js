#!/usr/bin/env node

const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
// const util = require('util') // for Method 2

// Method #2
// const lstat = util.promisify(fs.lstat)

// Method #3
// const { lstat } = fs.promises

// Final/Best Method
const { lstat } = fs.promises

const targetDir = process.argv[2] || process.cwd()

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err)
  }

  // Method 1, 2 ,3
  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename)

  //     console.log(filename, stats.isFile())
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // Final/Best Method
  // send the lstat calls
  const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename))
  })

  // wait for all promises to finish
  const allStats = await Promise.all(statPromises)

  // print it out
  for (let stats of allStats) {
    const index = allStats.indexOf(stats)

    if (stats.isFile()) {
      console.log(filenames[index])
    } else {
      console.log(chalk.bold(filenames[index]))
    }

  }
})

// Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err)
//       }

//       resolve(stats)
//     })
//   })
// }
