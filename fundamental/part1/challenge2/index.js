const masssMark = 96;
const heightMark = 1.88;

const markBMI = masssMark / (heightMark * heightMark) ;

const masssJohn = 88;
const heightJohn = 1.75;

const johnBMI = masssJohn / (heightJohn * heightJohn);

const markHigherBMI = markBMI > johnBMI

if (markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
} else {
    console.log(`Mark's BMI (${markBMI}) is not  higher than John's (${johnBMI}) !`)
}