`use strict`;

// from this (RY) => repea
// console.log('lifting weights repetition 1 🏋️');
// console.log('lifting weights repetition 2 🏋️');
// console.log('lifting weights repetition 3 🏋️');
// console.log('lifting weights repetition 4 🏋️');
// console.log('lifting weights repetition 5 🏋️');
// console.log('lifting weights repetition 6 🏋️');
// console.log('lifting weights repetition 7 🏋️');
// console.log('lifting weights repetition 8 🏋️');
// console.log('lifting weights repetition 9 🏋️');
// console.log('lifting weights repetition 10🏋️');

// to this

// the For loop keep running while the condition is TRUE

// logic encreasing the counter => rep++ = rep = rep + 1
for (let rep = 1; rep <= 10; rep++) {
  // console.log(` lifting weights repetition ${rep} 🏋️`);
}

// logic decrease the counter
for (let endOfMatch = 10; endOfMatch >= 0; endOfMatch--) {
  // console.log(`the match will end in ${endOfMatch}`);
}

for (let evenNum = 1; evenNum <= 20; evenNum++) {
  if (evenNum % 2 === 0) {
    // console.log(`the even number are ${evenNum}`);
  }
}

// Looping Arrays, Breaking and Continuing
// array recieve number % 2
const tuananhArr = [];

for (let evenNum = 1; evenNum <= 20; evenNum++) {
  if (evenNum % 2 === 0) {
    tuananhArr.push(evenNum);
  }
}
// console.log(tuananhArr);

const testArr = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const type = [];
for (let numArr = 0; numArr < testArr.length; numArr++) {
  // filling types Array
  type[numArr] = typeof testArr[numArr];
}

// const years = [1966, 1968, 1993, 1996, 2000, 2002, 2003]
// const age = [];
// for (let n = 0; n < years.length; n++){
//     const currentAge = 2026 - years[n];
//     age.push(currentAge);
// }

//console.log(age);

// const number =[1966,1968,1993,1996,2000,2002,2003]
// const evenNum = [];
// const oddNum = [];
// for(let n = 0; n < number.length ;n++){
//   if(number[n] % 2 !== 0) break;
//   evenNum.push(number[n]);
// }
// console.log(evenNum);

// Looping Backwards and Loops in Loops
const backArr = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// loop array backwards
for (let n = backArr.length - 1; n >= 0; n--) {
  console.log(backArr[n]);
}

// loop inside a loop
const arrEx = ["Toán", "Lý", "Hóa", "Tiếng Anh"];

const arrToan = [
  "làm bài cửu chương",
  "làm bài phương trình bậc 2",
  "làm bài chu vi",
  "làm bài diện tích",
];

for (let i = 0; i <= arrEx.length - 1; i++) {
  console.log(`--------- Starting ex ${arrEx[i]} ---------`);
  if (arrEx[i] === "Toán") {
    for (let exToan = 0; exToan <= arrToan.length - 1; exToan++) {
      console.log(`Subject ${arrEx[i]}: ${exToan} ${arrToan[exToan]}`);
    }
  } 
}

const numbers = [10, 23, 45, 66, 78, 91];

for (let n = numbers.length; n >= 0; n--){
    if(numbers[n] % 2 !== 0) continue;
    console.log(`Index: ${n} | number: ${numbers[n]}`);
}