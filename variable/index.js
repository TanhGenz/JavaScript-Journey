// exercise 01
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// The output is "undefined," not an error, because the code structure is correct. 
// An "undefined" output is generated before the computer understands what `a` is, 
// so it automatically assumes `var` is an empty variable.

// exercise 02
console.log(b);
let b = 20;
// The error is ReferenceError: Cannot access 'a' before initialization 
// => meaning the computer didn't have time to understand what 'a' is before outputting it. 
// It differs from var in that it's more sequential; variables are declared first and then output, 
// and it doesn't automatically add empty variables, whereas var automatically adds empty variables.


// exercise 03
var x = 1;
function test() {
  console.log(x);
  var x = 2;
}
test();
// When calling test(), JS creates a separate Function Execution Context. 
// The var x inside the function hides the x = 1 outside.
