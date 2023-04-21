'use strict'

const store = require('../store')

test('throw when inputs is not buffer', async () => {
  await expect(store('not a buffer')).rejects.toStrictEqual(Error('input must be a buffer'))

  await expect(store(123)).rejects.toStrictEqual(Error('input must be a buffer'))

  await expect(store(true)).rejects.toStrictEqual(Error('input must be a buffer'))

  await expect(store([])).rejects.toStrictEqual(Error('input must be a buffer'))

  await expect(store({})).rejects.toStrictEqual(Error('input must be a buffer'))

  await expect(store(null)).rejects.toStrictEqual(Error('input must be a buffer'))
}, 3000)

test('store a buffer', async () => {
  expect(typeof data.id === 'string').toBe(true)
  expect(data.id.length === 4).toBe(true)
}, 3000)