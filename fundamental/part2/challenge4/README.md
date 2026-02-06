# Dev Log –20/01/2026
# Topic: JavaScript – Tips challenge with update using loops
# What i did:
in this section i update more about the feature for this tip challenge
first i create 3 array includes:
arr for bills: the task have
empty arr tips: to calc from the bill 
empty arr total: to calc the total of data bills
then => i use the logic function  that i used in early section with the condition of mine
then i use the loops to calc each index in arr bills 
the loops by `for` => i create the `eleData` variables with the condition that the results are not higher than the length of arr so index always count in arr
after that i use the logic function i already in calc func and input in the `for` loops
then i take the elements that i have approved before `eleData` => then represent `arguments` and declare by `tip` variables 
next => i have the value of tips => so i create a variable `total` to have a total of bills include tips => i take `bills[eleData]` now in bills, then i sum by `tips + bills[eleData]` => then i have the total of bills


bonus: calc the average of any array in this section
first i create a variable `sum` and declare by `0` to add up all value in arrray
second i create `for` to recieve all index in the arr i want to calc the average
third i use the logic `sum += the index` 
forth i bring these logic into a function caclAverage with parameters `arr` 
 the parameters (will be the arr.length)
after that i call outside and input the arr.length 
then will have a average value off arrays

# what i learned: 
i learn the `for` loop t
# problem: 
# how i solved:
# time spent: 
3h
# learn more: 



Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array