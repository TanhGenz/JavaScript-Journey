`use strict`;
/*  Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. */

const arrData = [22, 295, 176, 440, 37, 105, 10, 1100, 86];
const arrtips = [];
const arrTotal = [];

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

for (let eleData = 0; eleData < arrData.length; eleData++) {
  const tips = calcTip(arrData[eleData]);
  arrtips.push(tips);

  const total = tips + arrData[eleData];
  arrTotal.push(total);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let eleArr = 0; eleArr < arr.length; eleArr++) {
    sum += arr[eleArr];
  }
  return sum / arr.length;
};

const arrAverage = calcAverage(arrTotal);
console.log(arrAverage);



/* 
let sum = 0;
for (let n = 0; n < arrTotal.length; n++) {
  sum += arrTotal[n];
}
const calcAverage = function (sum, arr) {
  return sum / arr;
};
console.log(typeof arrTotal.length);
console.log(sum);
console.log(calcAverage(sum, arrTotal.length));
*/