// Lexical scoping

// Inner function has the access of outer function variables

function outer() {
	const username = "chai";

	function inner() {
		console.log(username);
	}

	inner();
}

// outer();

// Closure

// A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope.

function outer() {
	const username = "chai";

	function inner() {
		return username;
	}

	return inner;
}

const myFunc = outer();

// console.log(myFunc());
