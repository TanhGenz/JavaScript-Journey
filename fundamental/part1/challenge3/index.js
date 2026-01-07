// Dolphins teams after 3 rounds 97, 112 and 101
const round1Dolphins = 15;
const round2Dolphins = 55;
const round3Dolphins = 11;

// the average score of dolphins team
const averageDolphinsScore = (round1Dolphins + round2Dolphins + round3Dolphins) / 3;

// Koalas teams after 3 rounds
const round1Koalas = 10;
const round2Koalas = 15;
const round3Koalas = 20;

// the average score of koalas team
const averageKoalasScore = (round1Koalas + round2Koalas + round3Koalas) / 3;


if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log(`Dolphins win! with the score after 3 rounds ${averageDolphinsScore}`);
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log(`Koalas win! with the score after 3 rounds ${averageKoalasScore}`);
} else if (
    averageDolphinsScore === averageKoalasScore &&
    averageDolphinsScore >= 100 &&
    averageKoalasScore >= 100
) {
    console.log(`Rematch becasue both team draws! ${averageDolphinsScore} \n ${averageKoalasScore}`);
} else {
    console.log("No team wins the trophy and ends this battle");
}