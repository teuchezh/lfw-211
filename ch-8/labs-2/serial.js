'use strict'
const { promisify } = require('util')

const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

async function run() {
  print(await promisify(opA)())
  print(await promisify(opB)())
  print(await promisify(opC)())
}
run()

// Последовательныое выполнение, вывод в консоль A B C (по времени выполнения)