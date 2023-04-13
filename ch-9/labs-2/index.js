// Without removing any of the existing code, and without using a try/catch block add some
// code which stops the process from crashing. When implemented correctly the process should
// output passed!.

'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('error', (err) => {
  console.error(err)
})

ee.emit('error', Error('timeout'))

// Добавляем обработчик ошибок для события 'error' и выводим в консоль сообщение об ошибке