// Try to pass 3rd arg in foreach.

var arr = [11, 22, 33, 44, 55];

var arr2 = arr.map((elem) => {
    return elem * 10;
});

// console.log(arr2);

var names = ["Punit", "Sarthak", "Virat", "Hars"];


// Map
// var nameLength = names.map((str) => {
//     if(str.length >= 5){
        
//     }
// });

// Filter 

let newArr = [5, 9, 2, 4, 33, 8];

let myArr = newArr.filter((elem) =>{
    return elem % 2 == 0;
});

// console.log(myArr);

// Filter returns nothing by default [].
// Map returns undefined by default [].

// Reduce 

// newArr.reduce(function(acc, val){
//     console.log(acc);
// }, 150);

const ans = newArr.reduce(function(acc, val){
    if(val > acc){
        return val;
    } else {
        return acc;
    }
}, 0);

console.log(ans);

// * Dry run sum, max, logic using reduce

// Baaki - find k baad sab

// How to seal array

find, findindex, some every, destructuring, skip values, 