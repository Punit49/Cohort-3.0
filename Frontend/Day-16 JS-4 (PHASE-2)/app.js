// ? Functions and thier types - 

// * FUnction declaration
// console.log(calculateArea(5, 3)); // No error
function calculateArea(l, b){
    return l * b;
}

// console.log(calculateArea(10, 4));

// * Function Expression
// greet(); // Error

const greet = function(name){
    return `Hello, ${name}`;
}

// console.log(greet("Punit"));
// console.log(greet("Sarthak"));

const greet2 = function sayHello(name){
    return `Hello, ${name}`;
}

// console.log(sayHello()) // not defined

// * Arrow Functions - One liners
const add = (a, b) => a + b;
const mul = (x, y) => x * y;

const sq = p => p * p;

// console.log(add(10, 3));
// console.log(mul(10, 3));
// console.log(sq(4));

// * Default Parameteres
const welcome = (name = "User") => {
    console.log("Welcome,", name);
}

// welcome();

// * Rest Parameter
function sumAll(...nums){
    let total = 0;
    console.log(nums);

    for (const n of nums) {
        total += n;
    }

    return total;
}

// const total = sumAll(10, 20, 5, 10, 8);
// console.log(total); 

// ? Too many and too few
function sum2(a, b){
    console.log(a + b);
}

// sum2(10);

// * Functions as first class citizens -
// ? Functions are called first class citizens because they can be treated as any other value, they can be :-
    // 1. Stored in a variable.
    // 2. Pass as arguments in other functions
    // 3. Functions can be returned from another function.
    // 4. Can be stored in an array or objects.

const sayHi = function() { console.log("Hi"); };

// function as arguments
const callTwice = (fn) => {
    fn();
    fn(); 
}

// callTwice(sayHi);

// function as return
function myFunc(){
    function returnFunc(){
        console.log("Inside Return Function");
        return "I am returned function";
    }
    return returnFunc;
}

const valFunc = myFunc();
// console.log(valFunc()); 

// * Storing function in array or object
const myArray = [sum2, greet, calculateArea];

const funObj = {
    name: "Sarthak",  
    sayWelcome: function(name){
        console.log(this.name, "Welcome");
    }
};

console.log(funObj.sayWelcome());

// myArray[0](10, 200)
// console.log(myArray[1]("Punit"));
// console.log(myArray[2](12, 5));

// * Callback functions -
function printInfo(name, age){
    return `My Name is ${name} & My Age Is ${age}`;
}

function fun1(cb, name, age){
    let value = cb(name, age);
    return value.toUpperCase();
}

const user1 = fun1(printInfo, "Punit", 21);
// console.log(user1);

const user2 = fun1(printInfo, "Sarthak", 23);
// console.log(user2);

// setTimeout(() => {
//     console.log("After 2 seconds...")
// }, 2000);

// * Higher Order functions -
// 1
function high1(){
    return "I am Higher Order function - 1";
}

function high2(highOrderFN){
    const val = highOrderFN();
    return val.toUpperCase();
}

const data = high2(high1);
// console.log(data);

// 2. 
function high3(){
    return () => {
        console.log("I am higher order arrow function - 2");
    }
}

const hF = high3();
// console.log(hF());

// ? IIFE — Immediately Invoked Function Expression
// (function(){
//     console.log("I am IIFE");
// })();

// ? Pure and Impure functions
function getSum(a, b){ // pure
    return a + b;
}

console.log(getSum(19, 1));

let count = 0;

function increaseCount(){
    count++;
    return count;
}

console.log(increaseCount());
console.log(increaseCount());
console.log(increaseCount());

// ? Recusrion basic -
