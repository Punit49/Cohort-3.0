
// ? Type Conversion vs Type Coercion - 
// * String to Number
// let str = "Punit";

// let numStr = Number(str);
// console.log(numStr); //NaN - String can't be converted into number

// let str2 = "90";
// let numStr2 = Number(str2);
// console.log(str2); // 90 - String "90" can be converted to number.

// * null to String
// const n2 = null;
// const strNull = String(n2);
// console.log(typeof strNull);

// * undefined to String
// const n3 = undefined;
// const strUnd = String(n3);
// console.log(typeof strUnd);

// * Number to String
// let n = 10;
// let newStr = String(n);
// console.log(newStr);

// * null to Number 
// let n4 = null;
// let numNull = Number(n4);
// console.log(numNull); 

// * null to Number 
let n5 = undefined;
let numUnd = Number(n5);
console.log(numUnd); 


// * Boolean
var a = "Punit";
var b = Boolean(a);
console.log(b);












// ? Class Task -
// const maths = Number(prompt("Enter Marks: "));
// const phy = Number(prompt("Enter Marks: "));
// const chem = Number(prompt("Enter Marks: "));

// let avg = (maths + phy + chem) / 3;
// console.log(avg);

// if(avg >= 85){
//     console.log("You are eligible for scholership");
// } else {
//     console.log("You are not eligible for scholership");
// }
