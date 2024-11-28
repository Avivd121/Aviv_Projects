// task 1a
const num1 = 123;
Number(num1 % 5 === 0) &&
  Number(num1 % 2 === 0) &&
  Number(num1 % 3 === 0) &&
  console.log("1");

//task 1b
const num2 = 123;
(Number(num2 % 2 === 0) && Number(num2 % 3 === 0) && console.log("2")) ||
  (Number(num2 % 3 === 0) && Number(num2 % 5 === 0) && console.log("2")) ||
  (Number(num2 % 2 === 0) && Number(num2 % 5 === 0) && console.log("2"));

// tar 1c
const num = 123;
num % 5 === 0 && num % 2 === 0 && num % 3 === 0 && console.log("3");
