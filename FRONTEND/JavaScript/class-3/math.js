//mathematical operator:
let num1 = 5;
let num2 = 3;
let result = (num1 = num2); //addition

//multiplication
let result1 = num1 * num2;

//substraction
let result2 = num1 - num2;

//division
let result3 = num1 / num2;

//modules to find the remainder
//module operator

let num3 = 29;
let even = num3;

//Reational operator :
//To compare two values;

//Equality operator :
//'==': Value and Data type check

console.log(5 >= 5); //Boolean

//Task:
//Given the total_bill,discount_start_price if you satisfy the condition Print Discount
//Available Otherwise print No Discount

let total_bill = 750;
if (total_bill > 500) {
  console.log("Discount Available");
} else {
  console.log("No Discount");
}

//Check if (male) and then check (22+) then he can able to maary
let age = 60;
if (age >= 60) {
  console.log("Adult and Senior");
} else if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//Task-3
//Check if (male) and then check (22+) then he can able to maary

//Check the vowel(a,e,i,o,u)

let char = "a";

switch (char) {
  case "a":
    console.log("It's vowel");
    break; //to break the flow
  case "e":
    console.log("It's vowel");
    break;
  case "i":
    console.log("It's vowel");
    break;
  case "o":
    console.log("It's vowel");
    break;
  case "u":
    console.log("It's vowel");
    break;

  default:
    console.log("It's not a vowel");
    break;
}
