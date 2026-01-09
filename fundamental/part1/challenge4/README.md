# Dev Log – 08/01/2026
# Topic: JavaScript – Tips challenge
# What i did:
calculate the tips with conditions if the bill have more than or equals 300$ and less more than or equals 50$
the percentage of the tips will be 15% else the tips will be 20% in total of bills
in here the topic said shouldn't using if else statement, so i used a ternary operator! to make the conditions statement 
then cal the tips by the logic bill plus the value of tips => then will have the result of tips
next cal the total bill by get the bills additions with the tips => we will have the total value of bills
after that i console the bill, the tips and the total of bills
# what i learned: 
i learn about a ternary operator! 
i can use this to make the code more shorter to read
# problem: 
first i use condition `50 <= bills <= 100 ` => JavaScript not allow mathematical string comparisons like Math.
# how i solved:
i solved by using the logical AND operators => `bills >= 50 && bills <= 100`
# time spent: 
15 min
# learn more: 
i should learn more about a ternary operator to deep known how they work more further








Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300 (If the value is different, the tip is 20%.)
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430