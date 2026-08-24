// Number
let num: number = 121;

// num = Number("121");

// String
let name:string = "Punit";

// undefined
let val: undefined = undefined

// null
let val2: null = null

// boolean
let bool: boolean = true;

// With strictNullChecks: false - TypeScript can treat null more loosely, so this can be allowed:
let val3 = null;
val3 = 10;

console.log(num);

// Union Types - 
let age: null | number = 21;

age = null;

// any, never and unknown, arrays and tuples

// Arrays - 
let arr: number[] = [10, 20, 0.19];
let strArr : string[] = ["punit", "sahu"];

// Tupples - 
let tupleArr: [string, number, string] = ["punit", 21, "sahu"];

// Any -
let anyArr: any[] = [10, "NUMBER", true, '🐢'];
let val4: any = 10;

val4 = "Punit"
// val4= true;

// console.log(val4.toUpperCase());

// Unknown -
let val5: unknown = 10;
val5 = "Punit"

// val5.toUpperCase(); // unknown, we must narrow it

if(typeof val5 == "string"){
    console.log(val5.toUpperCase());
}

// Never 
let val6: never = 10;

// array of objects - 
let arr1: [{name: string, age: number}, {name: string, age: number}] = [
    {
        name: "Punit", 
        age: 21,
    }, {
        name: "Punit", 
        age: 21,
    } 
];

let arr2: any = [
    {
        name: "Punit", 
        age: 21,
        marks: 12
    }, {
        name: "Punit", 
        age: 21,
  } 
];

let arr3: unknown = [
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
enum status{
    "PENDING",
    "SUCCESS",
    "REJECTED"
}

let status1: status = status.PENDING;
// console.log(status1);

// console.log(typeof status);

// unions
let info: string | number = "Punit";
// info = 21;
// info = true;

let directions: "Left" | "Right" | "Top" | "Botton";

directions = "Left";
// directions = "Top Left"

console.log(directions);

// Type Literals - 
type Role = "ADMIN" | "SUPER_ADMIN" | "USER";

let role: Role = "ADMIN";

