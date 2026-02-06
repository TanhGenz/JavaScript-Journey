// Introduction to Objects
// Arrays
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Object
const jonasObject = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

///////////////////////////////////////
// Dot vs. Bracket Notation
console.log(jonasObject);

console.log(jonasObject.lastName);
console.log(jonasObject["lastName"]);

//
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends",
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends",
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
);

///////////////////////////////////////
// Object Methods

const tuananhObj = {
  firstName: "Tuấn Anh",
  lastName: "Nguyễn",
  birthYear: 2002,
  job: "front end developer",
  friends: ["Bảo Anh", "Quốc Anh", "Lan Anh"],
  hasSomeWine: false,
  calcAge: function () {
    console.log(this);
    this.age = 2026 - this.birthYear; // create property age
    return this.age;
  },
  getOld: function () {
    return `${this.firstName} is ${this.calcAge()}, 
      and he is too ${this.hasSomeWine ? "old" : "young"}`;
  },
};
tuananhObj.calcAge();
console.log(tuananhObj.getOld());
