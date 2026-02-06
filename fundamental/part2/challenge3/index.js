`use strict`;
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  // Method (function as property)
  calcBMI: function () {
    // 'this' refers to the current object (jonas)
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  // Method (function as property)
  calcBMI: function () {
    // 'this' refers to the current object (jonas)
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// let bmiSenctence;
if (mark.calcBMI() > john.calcBMI()) bmiSenctence = `${mark.calcBMI()}`;

console.log(bmiSenctence);
