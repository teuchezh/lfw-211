'use strict'
const store = require('../store')

test('throw when inputs not buffer', (done) => {
  store('not a buffer', (err) => {
    expect(err.toString()).toEqual('Error: input must be a buffer')
  })

  store(000, (err) => {
    expect(err.toString()).toEqual('Error: input must be a buffer')
  })

  store(true, (err) => {
    expect(err.toString()).toEqual('Error: input must be a buffer')
  })

  store([], (err) => {
    expect(err.toString()).toEqual('Error: input must be a buffer')
  })

  store({}, (err) => {
    expect(err.toString()).toEqual('Error: input must be a buffer')
  })

  store(null, (err) => {
    expect(err.toString()).toEqual('Error: input must be a buffer')
  })

  done()
})

