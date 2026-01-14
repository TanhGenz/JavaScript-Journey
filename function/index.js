'use strict';

// function
function helloWords() {
    // console.log("hello worlds");
}



// funciton declaration and funcion expression

// function declaration => using function declaration when we want to hoisting imediately
function calcAge(fullOfName, dateOfBirth) {
    return `in 2026, ${fullOfName} is ${2026 - dateOfBirth} 
        years old ! too young too retire !`;
}
const doB = calcAge("T.anh", 2002);
console.log(`dob: ${Boolean(doB)} => function declaration`);

/* function expression => using function when flexibility is needed, or to call in another place (maybe another function) */
const calcAge2 = function (fullOfName, dateOfBirth) {
    return `in 2026 ${fullOfName} is ${2026 - dateOfBirth} 
		years old ! too young too retire`;
}
const doB2 = calcAge2("T.anh", 2002);
console.log(`dob2: ${Boolean(doB2)} => function expression`);

// Arrow function
const calcAgeRetirement = (fullOfName, dateOfBirth) => {
    const oldNow = 2026 - dateOfBirth;
    const ageRetirement = 65 - oldNow;
    return `about ${ageRetirement} years, ${fullOfName} will retire!`;
}
const doB3 = calcAgeRetirement("Tuấn Anh", 2002);
console.log(`dob3: ${Boolean(doB3)} => arrow function`);


// function call other function
const fruitSlice = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apple, orange) {
    const appleSlice = fruitSlice(apple);
    const orangeSlice = fruitSlice(orange)
    const fruit = `there are ${apple} apples, will slice in into ${appleSlice}, and ${orange} oranges,  
        will slice in into ${orangeSlice} !`;
    return fruit;
}
const totalFruitProcessor = fruitProcessor(5, 6);
console.log(totalFruitProcessor);

