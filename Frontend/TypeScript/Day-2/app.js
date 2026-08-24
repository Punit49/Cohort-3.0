"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Number
let num = 121;
// num = Number("121");
// String
let name = "Punit";
// undefined
let val = undefined;
// null
let val2 = null;
// boolean
let bool = true;
// With strictNullChecks: false - TypeScript can treat null more loosely, so this can be allowed:
let val3 = null;
val3 = 10;
console.log(num);
// Union Types - 
let age = 21;
age = null;
// any, never and unknown, arrays and tuples
// Arrays - 
let arr = [10, 20, 0.19];
let strArr = ["punit", "sahu"];
// Tupples - 
let tupleArr = ["punit", 21, "sahu"];
// Any -
let anyArr = [10, "NUMBER", true, '🐢'];
let val4 = 10;
val4 = "Punit";
// val4= true;
// console.log(val4.toUpperCase());
// Unknown -
let val5 = 10;
val5 = "Punit";
// val5.toUpperCase(); // unknown, we must narrow it
if (typeof val5 == "string") {
    console.log(val5.toUpperCase());
}
// Never 
let val6 = 10;
// array of objects - 
let arr1 = [
    {
        name: "Punit",
        age: 21,
    }, {
        name: "Punit",
        age: 21,
    }
];
let arr2 = [
    {
        name: "Punit",
        age: 21,
        marks: 12
    }, {
        name: "Punit",
        age: 21,
    }
];
let arr3 = [
    {
        name: "Punit",
        age: 21,
        marks: 12
    }, {
        name: "Punit",
        age: 21,
    }
];
// console.log(arr3[0].marks);
// console.log(obj);
// enum - set of named constant values -
var status;
(function (status) {
    status[status["PENDING"] = 0] = "PENDING";
    status[status["SUCCESS"] = 1] = "SUCCESS";
    status[status["REJECTED"] = 2] = "REJECTED";
})(status || (status = {}));
let status1 = status.PENDING;
// console.log(status1);
// console.log(typeof status);
// unions
let info = "Punit";
// info = 21;
// info = true;
let directions;
directions = "Left";
// directions = "Top Left"
console.log(directions);
let role = "ADMIN";
//# sourceMappingURL=app.js.map