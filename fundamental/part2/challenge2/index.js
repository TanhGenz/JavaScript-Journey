const bills = [125, 555, 44];

const calcTip = function (bill) {
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
    return tip;
}

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];

const total = [
    calcTip(bills[0]) + bills[0],
    calcTip(bills[1]) + bills[1],
    calcTip(bills[2]) + bills[2],
];

// Bonus for me
const giveBill = [
    `the bills was ${bills[bills.length - 3]}$ so the tip was ${tips[tips.length - 3]}$, total: ${total[total.length - 3]}$`,
    `the bills was ${bills[bills.length - 2]}$ so the tip was ${tips[tips.length - 2]}$, total: ${total[total.length - 2]}$`,
    `the bills was ${bills[bills.length - 1]}$ so the tip was ${tips[tips.length - 1]}$, total: ${total[total.length - 1]}$`,
]

console.log(giveBill);  