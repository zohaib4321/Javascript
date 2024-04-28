
// Intermediate Invoked Function Expressions:
// It executes as soon as defined
// Used to avoid polluting by global variable 

// Named IIFE

(function myfunc() {
   console.log("DB Connected");
})();

// Unnamed IIFE

((name) => {
   console.log(`Hello , ${name}`);
})('Arham')
