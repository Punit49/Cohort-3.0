"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userObj = {
    name: "Punit",
    age: 22,
    address: {
        street: "New Road",
    },
};
userObj.name = "Devendra";
userObj.rollNo = 101;
// console.log(userObj);
// Functions - 
// const sum = (a: number, b: number): Function => { // parameters will have "any" type by default
//     // return undefined; // possible for :void
//     return (a: number, b: number) => {
//         console.log(a ** b);
//     };
// }
// const fun = sum(10, 15);
// fun(2, 4); 
// * return function
// const sum = (a: number, b: Function): number => { 
//     return a + b();
// }
// const fun = sum(10, () => 12);
// console.log(fun);
// const sum = (a: number, b: () => string): number => { 
//     return a + Number(b());
// }
// const fun = sum(10, () => "120");
// console.log(fun);
const sum = (a, b) => {
    console.log(b());
    return a + Number(b());
};
// () => void means "I will ignore the return value of this callback", not strictly "this function is forbidden from returning a value."
// b: () => void     // callback is allowed to return something; caller ignores it
// ): void           // THIS function itself must not return a value
const fun = sum(10, () => { });
console.log(fun);
// curring function
// let sum2 = (a: number) => {
//     return (b: number) => {
//         if(b !== undefined) {
//             return sum2(a + b);
//         }
//         return a;
//     }
// }
// console.log(sum2(89)(78)(9));
function fun1(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
}
// console.log(fun1(10)(2)(3));
// const sum4 = (a?: number, b: number = 1): number => { 
//     return 2 * b;
// }
// console.log(sum4(10, 2));
// rest parameter -
// const sumArr = (...rest: number[] ):number => {
//     return rest.reduce((acc, val) => acc + val, 0)
// }
// console.log(sumArr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//# sourceMappingURL=app.js.map