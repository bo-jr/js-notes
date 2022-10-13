#!/usr/bin/env node

const chokidar = require('chokidar')
const debounce = require('lodash.debounce')

// need to detect when a file changes
// it would be nice to provide some help to users of our cli tool
// need to figure out how to execute some js code from within a js program

const start = debounce(() => {
  console.log('STARTING USERS PROGRAM')
}, 100)

chokidar.watch('.')
  .on('add', start)
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE UNLINKED'))
