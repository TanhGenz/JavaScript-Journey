// Arrays

// a literal syntax.
const friends = ["Hau", "Hung", "Hanh", "Hai", "Khoa", "Son", "tuananh"];
console.log(`the alphabet ${friends[0][1]} in the ${friends[0]}`);


// another way to call array with parenthesis.
const years = new Array(1966, 1968, 1993, 1996, 2000, 2002, 2003);
// console.log(years)
// .length  
console.log(years[years.length - 1]);


const currentYear = 2025;
const infoTa = ["tuan anh", currentYear - 2002, years];
console.log(infoTa[infoTa.length - 1]);