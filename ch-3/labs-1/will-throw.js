function f (n = 99) {
  if (n === 0) throw Error()
  f(n - 1)
}
f()

// node --stack-trace-limit=200 will-throw.js 
// устанвливает количество выодимых строк в стеке ошибки