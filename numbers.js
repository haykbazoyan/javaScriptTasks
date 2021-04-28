let firstNum = Number(prompt("First number :"));
let secondNum = Number(prompt("Second number :"));

console.log(`${firstNum + secondNum}`);

// toFixed
let fixedNum = 24.3567;
console.log(fixedNum.toFixed(2)); // return 24.36

// Math.round
// for correct round
let number = 6.35;
number = Math.round(number * 10) / 10;

// Math. float
number = 3.4;
number = Math.floor(number); // return 3

// random
let randomNumber = Math.random();
randomNumber = 1 + Math.floor(Math.random() * 100); // return random number from 1 to 100

console.log(randomNumber);

// parseInt() & parseFloat()
let cameraRes = "12px";
let length = "24.52sm";

console.log(parseInt(cameraRes));
console.log(parseFloat(length));
