#!/usr/bin/env node

const chokidar = require('chokidar')
const debounce = require('lodash.debounce')
const program = require('caporal')
const fs = require('fs')
const { spawn } = require('child_process')
const chalk = require('chalk')

// need to detect when a file changes
// it would be nice to provide some help to users of our cli tool
// need to figure out how to execute some js code from within a js program

program
  .version('1.0.0')
  .argument('[filename]', 'Name of a file to exexcute')
  .action(async ({ filename }) => {
    const name = filename || 'index.js'

    try {
      await fs.promises.access(name)
    } catch (err) {
      throw new Error(`Could not find the file ${name}`)
    }

    let proc
    const start = debounce(() => {
      if (proc) {
        proc.kill()
      }
      console.log(chalk.blue('>>>>> Starting process...'))
      proc = spawn('node', [name], { stdio: 'inherit' })
    }, 100)

    chokidar.watch('.')
      .on('add', start)
      .on('change', start)
      .on('unlink', start)
  })

program.parse(process.argv)
