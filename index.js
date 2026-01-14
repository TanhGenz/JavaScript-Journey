`use strict`;
// the place to test all

// console.log(Boolean (0));

// console.log(Boolean([]));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(!1))

// function call other function
function isRestaurantOpen(hour) {
    return hour >= 9 && hour <= 12;
}

function isEnoughMoney(balance, price) {
    return balance >= price;
}

function orderFood(hour, balance, price) {
    // if (restaurantOpen && payBill) return "Order successful";
    // if (!restaurantOpen && payBill) return "Restaurant is closed";
    // if (restaurantOpen && !payBill) return "not enough money";
    // else return "get out";

    if (!isRestaurantOpen(hour)) return "Restaurant is closed";
    if (!isEnoughMoney(balance, price)) return "Not enough money";
    return "Order successful";
}

//console.log(orderFood(15, 105, 100));


const isLoggedIn = function (user) {
    return user === null;
}

const isAdult = function (age) {
    return age >= 18;
};

function watchMovie(user, age) {
    if (isLoggedIn(user)) return "Please login";
    if (!isAdult(age)) return "Age restricted";
    return "Enjoy the movie";
}

// console.log(watchMovie(null, 18));


function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test(""); // 'string' (num is set to '')
test(null); // 'object' (num is set to null)