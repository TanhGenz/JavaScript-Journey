let massMark = 95;
let heightMark = 1.88;
let markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);

let massJohn = 85;
let heightJohn = 1.76; 
let johnBMI  = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI)