// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (script or function).

// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

// It appears to be like: 

// var username;

// console.log(username); // undefined

var username = "chai"

// In case of let, const variable is also hoisted but it goes to temporal dead zone so, we cannot access these variables.

one()

function one() {
  console.log("This is function one");
}

two() // Cannot access 'two' before initialization

// Function expression is not hoisted

const two = function() {
  console.log("This is function two");
}

// We cannot access function expressions before initialization.

const three = (name) => {
  console.log(name);
}

three("Zohaib") // Zohaib