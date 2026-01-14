'use strict';
let calcAverages = (roundA, roundB, roundC) => {
    const average = (roundA + roundB + roundC) / 3;
    return average;
}

function checkWinner(avgDolhins, avgKoalas) {
    // if (avgDolhins > avgKoalas **2) return `Dolphins teams win (${avgDolhins} vs ${avgKoalas})`;
    // else if (avgKoalas > avgDolhins **2) return `Koalas teams win (${avgKoalas} vs ${avgDolhins})`;
    // else return "no team wins today";

    let theWinner = avgDolhins >= avgKoalas * 2 ? `Dolphins teams win (${avgDolhins} vs ${avgKoalas})`
        : avgKoalas >= avgDolhins * 2 ? `Koalas teams win (${avgKoalas} vs ${avgDolhins})` : "no team wins today";
    return theWinner;
}

const teamDolphins = calcAverages(100, 100, 100)
const teamKoalas = calcAverages(22, 34, 27)
const finalResult = checkWinner(teamDolphins, teamKoalas);
console.log(finalResult);