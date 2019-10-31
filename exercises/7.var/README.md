What is a variable in javascript?

// Assuming the following variables
//  x = 5
//  y = 10
//  z = 25

x = y     // x is 10
x = y = z // x, y and z are all 25

Operator: x += y 
Meaning:  x  = x + y

/ Assuming the following variables
//  foo = 'foo'
//  bar = 5
//  baz = true


// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 1

// Number + String -> concatenation
bar += 'foo' // "5foo"

// String + Boolean -> concatenation
foo += false // "foofalse"

// String + String -> concatenation
foo += 'bar' // "foobar"


Operator: x -= y 
Meaning:  x  = x - y

// Assuming the following variable
//  bar = 5

bar -= 2     // 3
bar -= 'foo' // NaN

Operator: x *= y 
Meaning:  x  = x * y

// Assuming the following variable
//  bar = 5

bar *= 2     // 10
bar *= 'foo' // NaN
