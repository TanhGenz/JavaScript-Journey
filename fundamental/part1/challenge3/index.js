// Dolphins and Koalas 97, 112 and 101. Koalas score 109, 95 and 123

const round1Dolphins = 97;
const round2Dolphins = 112;
const round3Dolphins = 101;

const averageDolphins = (round1Dolphins + round2Dolphins + round3Dolphins) / 3;

const round1Koalas = 109;
const round2Koalas = 95;
const round3Koalas = 123;

const averageKoalas = (round1Koalas + round2Koalas + round3Koalas) / 3;

if(averageDolphins > averageKoalas && averageDolphins >= 100){
    console.log("Dolphin wins", averageDolphins);
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log("Koalas wins", averageKoalas);
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100){
    console.log("draw");
}else{
    console.log("no teams win today");
}