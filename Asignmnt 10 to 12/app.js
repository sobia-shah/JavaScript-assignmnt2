


//10. Functions

//Question 1
//Write a function that takes two numbers as arguments and returns their sum.
// function sum(a, b) {
//     return a + b;
// }
// const result = sum(20, 30);
// console.log(result);

//Question 2
//Create a function that converts a temperature from Celsius to Fahrenheit using the formula F = C * 9/5 + 32.


// function temp(celcius) {
//     console.log(`F=${celcius*9/5+32}`);
    
    
// }temp(23)

//or


// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// const fahrenheit = celsiusToFahrenheit(25);
// console.log(fahrenheit);
       
//         //  or

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// const temperatureInCelsius = 25;
// const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
// console.log(`${temperatureInCelsius}°C is equal to ${temperatureInFahrenheit}°F`);

//Question 3

//Write a function that takes a number as input and returns true if the number is prime, and false otherwise.

// function prime(num) {
   
//     if (num%1===0 && num%2===0) {
//         console.log(false);
        
//     } else {
//         console.log(true);
        
//     }
// }prime(7)

//or


// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true; 

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false; 
//     }
    
//     return true; 
// }

// console.log(isPrime(7));   
// console.log(isPrime(10));  
// console.log(isPrime(13)); 

//Question 4
// Create a function that takes a string as input and returns the string reversed.

// function string(myNam) {
//     return myNam.split("").reverse().join("");
// }
// console.log(string("SOBIA"))



//Question 5
// Factorial of a Number:
// Write a function that calculates the factorial of a given number (e.g., factorial(5) should return 120).


// const factorial = function(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// };


// console.log(factorial(5)); 
// console.log(factorial(8)); 

//or



// function factorial(n) {
//     if (n < 0) return undefined; 
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i; 
//     }
//     return result;
// }
// console.log(factorial(5));
 


//Question 6
// Write a function that prints a generic greeting message like "Hello, welcome!" without taking any parameters.

// function greet() {
//     console.log("Hello, welcome!");
// }

// greet();

//Question 7
// Create a function that takes a name as a parameter and prints a personalized greeting, e.g., "Hello, [name]!".
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet("Sobia");

//Question 8
// Sum of Two Numbers (With Parameters):
// Write a function that accepts two numbers as parameters and returns their sum.

// function sum(num1,num2) {
//     var sumNum=(num1+num2)
//     console.log(`The sum of given numbers is ${sumNum}`)
//     return sumNum
// }
// sum(5,6)


//or


// function sum(a, b) {
//     return a + b;
// }

// const result = sum(4, 5);
// console.log(result);


//Question 9
// Create a function that generates and returns a random number between 0 and 100. This function does not require any parameters.

// const RandomNumber = function() {
//     return Math.floor(Math.random() * 100)+1;
// };


// console.log(RandomNumber()); 
//or


// function getRandomNumber() {
//     return Math.floor(Math.random() * 101);
// }

// const randomNum = getRandomNumber();
// console.log(randomNum);



//Question 10
// Write a function that takes age as a parameter and checks if the person is eligible to vote (18 years or older). It should return true or false.

// function votingAge(age) {
//     var age=prompt("Enter your age")
//     if(age>=18){
//         console.log(`You are ready to give vote`)
//         return true
//     }else{

//         console.log(`You are not eligible for voting`)
//     }
   
// }votingAge()
               //OR////

// const canVote = function(age) {
//     return age >= 18;
// };


// console.log(canVote(70)); 
// console.log(canVote(16)); 



//or




// function isEligibleToVote(age) {
//     return age >= 18;
// }

// console.log(isEligibleToVote(20)); 
// console.log(isEligibleToVote(17));


// 11. Arrow Function
//Question 1
// Write an arrow function that takes a number as input and returns its square.
// const square = (num) => num * num;

// console.log(square(3));


//Question 2
// Create an arrow function that takes an array of numbers and returns a new array containing only the even numbers.
// const filterEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNums = filterEvenNumbers(nums);
// console.log(evenNums);

//Question 3
// Write an arrow function that takes two strings as arguments and returns them concatenated.
// var concatenateStrings = (str1, str2) => str1 + str2;

// var res = concatenateStrings("Hello, ", "world!");
// console.log(res);

//Question 4
// Create an arrow function that accepts an array of numbers and returns the maximum value in the array.
// let findMaxValue = (arr) => Math.max(...arr);

// let numbers = [1, 3, 5, 7, 9];
// let maxValue = findMaxValue(numbers);
// console.log(maxValue);


//Question 5
// Write an arrow function that takes an array of numbers as input and returns the sum of all the numbers.
// let sumNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);

// let number = [1, 2, 3, 4, 5];
// let totalSum = sumNumbers(numbers);
// console.log(totalSum);


//Question 6
// Write an arrow function that takes no parameters and simply prints "Hello World" to the console.
// const greet = () => console.log("Hello World");
// greet();


//Question 7
// Create an arrow function that takes a number as a parameter and returns its square.
// var square = (num) => num * num;
// var result = square(5);
// console.log(result);


//Question 8
// Write an arrow function that accepts a number as a parameter and returns true if the number is positive, and false if it is negative or zero.

// const num=(a,b)=>

//    { if (a-b>0) {
//         return true
//     } else {
//         return false
//     }}

// console.log(num(4,3));

//i)

// const rndm=()=>Math.floor
// (Math.random()*50)+1;
// console.log(rndm());

//or



// var isPositive = (num) => num > 0;
// console.log(isPositive(5)); 
// console.log(isPositive(-3)); 
// console.log(isPositive(0));

//Question 9
// Create an arrow function that takes no parameters and returns a random number between 1 and 50.

// var getRandomNumber = () => Math.floor(Math.random() * 50) + 1;
// var randomNumber = getRandomNumber();
// console.log(randomNumber);


//Question 10
// Write an arrow function that takes minutes as a parameter and returns the equivalent time in seconds.

// var minutesToSeconds = (minutes) => minutes * 60;
// const seconds = minutesToSeconds(1);
// console.log(seconds);


// 12.Annoynumus Function


//Question 1
// Create an anonymous function that prints "Hello" to the console. Immediately invoke the function.
// (function() {
//     console.log("Hello");
// })();

//Question 2
// Write an anonymous function that takes two numbers as arguments and returns their sum. Assign it to a variable and call the function.

// let add = function(num1, num2) {
//     return num1 + num2;
// };

// let result = add(3, 5);
// console.log(result); 


//Question 3
// Use an anonymous function as a callback in Array.sort() to sort an array of numbers in ascending order.

// var numbers = [5, 2, 8, 1, 4];

// numbers.sort(function(a, b) {
//     return a - b;
// });

// console.log(numbers); // Outputs: [1, 2, 4, 5, 8]



//Question 4
// Create an anonymous function that takes a name as a parameter and logs a greeting message like "Hello, [name]!". Immediately invoke the function.

// (function(name) {
//     console.log(`Hello, ${name}!`);
// })('sobia');


//Question 5
// Write an anonymous function that takes a number as a parameter and logs whether the number is even or odd. Store it in a variable and then invoke it.
// var checkEvenOdd = function(num) {
//     if (num % 2 === 0) {
//         console.log(`${num} is even.`);
//     } else {
//         console.log(`${num} is odd.`);
//     }
// };

// checkEvenOdd(7); //: 7 is odd.
// checkEvenOdd(4); // : 4 is even.




//Question 6
// Use an anonymous function as a callback in Array.filter() to return only the odd numbers from an array of integers.

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var oddNumbers = numbers.filter(function(num) {
//     return num % 2 !== 0;
// });

// console.log(oddNumbers); // Outputs: [1, 3, 5, 7, 9]



//Question 7
// Create an anonymous function that takes a number as input and returns its factorial. Assign the function to a variable and call it with different inputs.

// var factorial = function(n) {
//     if (n < 0) return undefined; 
//     if (n === 0 || n === 1) return 1; 
//     return n * factorial(n - 1); 
// };


// console.log(factorial(5)); // Outputs: 120
// console.log(factorial(0)); // Outputs: 1
// console.log(factorial(7)); // Outputs: 5040
// console.log(factorial(-3)); // Outputs: undefined




//Question 8
// Use an anonymous function inside setTimeout() to print a message like "Time's up!" after 2 seconds.

// setTimeout(function() {
//     console.log("Time's up!");
// }, 2000);


//Question 9
// Write an anonymous function as a callback in Array.reduce() to sum all the elements in an array.

// var numbers = [1, 2, 3, 4, 5];

// var sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum); // Outputs: 15



//Question 10
// Create an anonymous function that takes an age as input and logs whether the person is eligible to vote (age >= 18). Immediately invoke the function with different ages.

(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(20); // Immediately invoked with age 20

(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(16); // Immediately invoked with age 16

(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(18); // Immediately invoked with age 18
