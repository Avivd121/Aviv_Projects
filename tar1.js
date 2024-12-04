//Presenter: Aviv Dahan
//task 1a
//The program checks If the number is divisible by 2 or 3 or 5 – print 1 (divisible by only one number).
const num1 = 123;
Number(num1 % 5 === 0) &&
  Number(num1 % 2 === 0) &&
  Number(num1 % 3 === 0) &&
  console.log("1");

//task 1b
//The program checks if the number is also divisible by 2 and 3 or by 3 and 5 or by 2 and 5 – print 2 (divisible by only two numbers).
const num2 = 123;
(Number(num2 % 2 === 0) && Number(num2 % 3 === 0) && console.log("2")) ||
  (Number(num2 % 3 === 0) && Number(num2 % 5 === 0) && console.log("2")) ||
  (Number(num2 % 2 === 0) && Number(num2 % 5 === 0) && console.log("2"));

//task 1c
//The program checks if the number is also divisible by 2, 3, and 5 – print 3.
const num = 123;
num % 5 === 0 && num % 2 === 0 && num % 3 === 0 && console.log("3");
