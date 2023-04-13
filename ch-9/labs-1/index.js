'use strict'
const assert = require('assert')
const { EventEmitter } = require('events')

const ee = new EventEmitter()

let count = 0
setInterval(() => {
  ee.emit('tick')
}, 100)

function listener () {
  count++
  setTimeout(() => {
    assert.equal(count, 1)
    assert.equal(this, ee)
    console.log('passed!')
  }, 250)
}

ee.once('tick', listener)
// По setInterval каждую секунду будет вызываться ee.emit('tick'), а ee.once('tick', listener) - отлавливает событие 'tick' и вызывает listener.