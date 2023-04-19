'use strict'

const { spawn } = require('child_process')

function exercise(command, args) {

  return spawn(command, args, {
    stdio: ['ignore', 'inherit', 'pipe'],
  })
}

module.exports = exercise

// Опция options.stdio используется для настройки каналов, которые устанавливаются между родительским и дочерним процессом
// pipe - канал между родительским и дочерним процессом
// inherit - канал между родительским и дочерним процессом, но вместо создания нового канала, используется канал родительского процесса
// ignore - канал не создается