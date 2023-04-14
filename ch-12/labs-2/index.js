'use strict'
const { Readable, Writable, Transform, PassThrough, pipeline } = require('stream')
const assert = require('assert')
const createWritable = () => {
  const sink = []
  const writable = new Writable({
    write(chunk, enc, cb) {
      sink.push(chunk.toString())
      cb()
    }
  })
  writable.sink = sink
  return writable
}
const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()

// TODO: replace the pass through stream 
// with a transform stream that uppercases
// incoming characters
const transform = new Transform({
  decodeStrings: false,
  encoding: 'utf8',
  transform(chunk, enc, cb) {
    cb(null, chunk.toUpperCase())
  }
})

pipeline(readable, transform, writable, (err) => {
  assert.ifError(err)
  assert.deepStrictEqual(writable.sink, ['A', 'B', 'C'])
  console.log('passed!')
})

/**
  Хабр говорит, что есть 4 вида стримов:
  Readable — чтение
  Writable — запись
  Duplex — чтение и запись
  Transform — вид Duplex потока, который может изменять данные

  По условию задачи, нужно преобразовать стрим в верхний регистр.
  Для этого используем Transform стрим, который собственно позволяет изменять данные в потоке
  Передаем в конструктор объект с методом transform, который принимает 3 аргумента:
  chunk — данные, которые пришли в поток
  enc — кодировка
  cb — функция обратного вызова, которая принимает 2 аргумента:
    err — ошибка
    data — данные, которые нужно передать дальше
  В нашем случае, мы просто преобразуем данные в верхний регистр и передаем дальше
**/