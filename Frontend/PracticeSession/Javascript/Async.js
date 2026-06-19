function greet(name){
    return `Hello ${name}`;
}

function welcome(callback){
    return callback("Ritik");
}

// console.log(welcome(greet));

const timeOut = setTimeout(() => {
    console.log("Timeout");
}, 5000);

setTimeout(() => {
    clearTimeout(timeOut);
}, 1000);

let count = 5;

// const interval = setInterval(() => {
//     console.log(count--);
//     if(count === 0){
//         console.log("Done");
//         clearInterval(interval);
//     }
// }, 1000);


// Q6.
function user(){
    return {
        id: 1, 
        name: "Ritik"
    }
}

function fetchUser(callback){
    console.log("Fetching User...");
    setTimeout(() => {
        console.log(callback());
    }, 2000);
}

// fetchUser(user);

// Q7. Create Your First Promise\

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data Received");
//         console.log(myPromise);
//     }, 2000);
// });

// console.log(myPromise);

// Question 8 — Promise Rejection
// Create a Promise that rejects with: server down -

// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Server Down!");
//         console.log(myPromise2);
//     }, 2000);
// })

// myPromise2.catch((err) => {
//     console.log("Error - ", err);
// });

// console.log(myPromise2);

// Q9. 
// let myPromise3 = new Promise((resolve, reject) => {
//     let num = 0;
//     setTimeout(() => {
//         resolve(num + 10);
//     }, 1000);
// });

// myPromise3.then((value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(value);
//             resolve(value + 10);
//         }, 1000);
//     })
// }).then((value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(value);
//             resolve(value + 10);
//         }, 1000);
//     })
// }).then((value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(value);
//             resolve(value + 10);
//         }, 1000);
//     })
// });


// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);
//     });
// }

// async function getData(){
//     try{
//         const data = await fetchData();
//         console.log(data);
//     } catch(err){
//         console.log("Error - ", err);
//     }
// }

// getData();

// Q.11 ADCB - 

// Q12. https://jsonplaceholder.typicode.com/users/1

async function getUser(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    
    if(!res.ok){
        console.log("An error occured!");
        throw new Error("Error");
    }

    const data = await res.json();

    console.log(data);
}

getUser();