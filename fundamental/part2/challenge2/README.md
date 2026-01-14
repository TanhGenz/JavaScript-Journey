# Dev Log –14/01/2026
# Topic: JavaScript – Tips challenge but using with an array 
# What i did:
calculate the tips with conditions if the bill have more than or equals 300$ and less more than or equals 50$
the percentage of the tips will be 15% else the tips will be 20% in total of bills

in here topic use arrays, so i cretaed an array 'bills' containing the test data below
first i create a function calc tips => then i use the function to calc each elements in the array `bills`=>
then i created a new array and input the result of each elements after calt action in function

next step i calc the total of bill => and create another array calls total 
the logic i calc the logic bills by i call the the index of the elements of each 2 arrays are bills and tips =>
then i add it together by `bills[0] + tips [0]`

after that i made the bonus for myself about create an arrays with the sentence 
i reuse 3 array to make an senctence => and apply by using the `length` properties to recieve the final elements
`arrName[arrName.length - 1]`

# what i learned: 
i learn about a array, how to interact with an array
how array of each elements (index) works in a function
how the [] accepts what (index , expression or some thing have a value  "number"), not accepted with (statements,
its always dont have a value immediately)
i know how convinence the `length properties` bring to mine, now i can get the any of values without count more
by using `length - 1` will get the final elements 
# problem: 
first i still confusing about the expression and statement => likes i dont know what exactly the `[]` want
# how i solved:
i solved by research more and more => what exactly the `[]` want and can bring to it
# time spent: 
3h
# learn more: 
i should learn more further about the maps => because it still repeat again in the part my own bonus 










Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)