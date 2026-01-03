const massMark = 95;
const heightMark = 1.88;
const markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);

const massJohn = 85;
const heightJohn = 1.76; 
const johnBMI  = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI)