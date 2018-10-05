// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver() {
  new_arr = drivers.push('Ralph')
  return new_arr
}

function destructivelyPrependDriver() {
  new_arr = drivers.unshift('Bob')
  return new_arr
}

function destructivelyRemoveLastDriver() {
  new_arr = drivers.pop()
  return new_arr
}

function destructivelyRemoveFirstDriver() {
  new_arr = drivers.shift()
  return new_arr
}

function appendDriver(name) {
  arr = drivers.slice(0, drivers.length)
  arr.push(name)
  return arr
}

function prependDriver(name) {
  console.log(new_arr = drivers.slice(0, drivers.length))
  arr = drivers.slice(0, drivers.length)
  arr.unshift(name)
  return arr
}

function removeLastDriver() {
  new_arr = drivers.slice(0, drivers.length - 1)
  return new_arr
}

function removeFirstDriver() {
  new_arr = drivers.slice(1)
  return new_arr
}
