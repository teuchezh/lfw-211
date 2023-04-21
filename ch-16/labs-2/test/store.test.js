'use strict'
const store = require('../store')

test('throw when inputs not buffer', (done) => {
  store('not a buffer', (err) => {
    expect(err.toString()).toEqual('Error: input must be a buffer')
  })

  store(123, (err) => {
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

test('store a buffer', (done) => {
  store(Buffer.from('lol-kek-cheburek'), (err, data) => {
    expect(err === null).toBe(true)
    expect(typeof data.id === 'string').toBe(true)
    expect(data.id.length === 4).toBe(true)

    done()
  })
})