`use strict`;
// .trunc: even number |  Math.random() * 6: random 6 numbers (0 to 6) | + 1: 1 to 6
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  //console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
// console.log(dice);

// let number = 0;
// while (number <= 10) {
//   number++;
//   if (number % 2 === 0) console.log(number);
// }
// console.log("outside: ", number);

let n = 0;
let x = 0;

while (n < 3) {
  // 0 1 2
  n++; // 0: 0+1 = 1 | 1: 1+1= 2 |  2+1 =3
  x += n; // 0: 0+1 = 1 |  1: 2+1= 3 | 2: 3+3 = 6
  console.log(x);
}
console.log(n, x);
const a = '555';
