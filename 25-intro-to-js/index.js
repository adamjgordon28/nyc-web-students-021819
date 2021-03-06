console.log('in index.js')

assert('JS does basic math', 1 + 1 == 2)
assert('JS has the double equals equality operator', 2 == 2)
assert('JS double equals equality operator coerces type', 2 == '2')
assert('JS triple equals equality operator coerces type', 2 !== '2')

assert('the && operator', !(true && false))
assert('the || operator',  true || false)
assert('the && operation evaluates to the value of the expression', "ponies" || true)
//
// var name = 'alex'
// assert('JS has string templating', `Hello, ${name}` === "Hello, alex")

function name() {
  return "ian"
}

assert('In a JS function you need an explicit return', name() === 'ian')

assert('JS has string templating', `Hello, ${name()}` === "Hello, ian")

var firstName
console.log('firstName is:', firstName);

assert('a newly declared variable is undefined. undefined is a falsey value', !firstName)


var arr = []
assert("JS has arrays", Array.isArray(arr))

var obj = {}
assert("JS has objects", typeof obj === "object")

var obj = {name: 'vicky'}
assert(
  "We can use dot notation to access the value at a certain key of a JS object",
  obj.name === 'vicky'
)

var obj = {name: 'vicky'}
assert(
  "We can use bracket notation to access the value at a certain key of a JS object",
  obj["name"] === 'vicky'
)

const key = "name"

assert(
  "We can use bracket notation to access the value at a certain key of a JS object and the value in the brackets will be evaluated as JS",
  obj[key] === 'vicky'
)


var katzDeliLine = []

function takeANumber(name) {
  katzDeliLine.push(name)
  return katzDeliLine.length
}


assert ('takeANumber returns the new length of the line', takeANumber('Mica') === 1)

takeANumber('Nicky')

function showLine() {
  var results = "The line is currently: "

  // for(where to start counting; when to stop; how to count)
  for(let i = 0; i < katzDeliLine.length; i++) {
    const name = katzDeliLine[i]
    results += `${i + 1}. ${name}, `
  }

  // console.log(name)

  return results
}

assert('showLine returns the current Line', showLine() === "The line is currently: 1. Mica, 2. Nicky, ")
