// ? Arrays - 
// * Question 1 (Easy) — Find Expensive Products

    let arr = [100, 250, 150, 700, 500];

    let filteredArr = arr.filter(item => item > 300);

    // console.log(filteredArr);

// * Question 2 (Moderate) — Student Average

    let marks = [80, 90, 85, 70, 95];

    let averege = marks.reduce((acc, cur) => acc + cur) / marks.length;

    // console.log(averege);

// * Question 3 (Hard) — Most Frequent Number
    let nums = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

    let freq = {};
    let maxNum = 0;
    let maxCount = 0;

    for (const element of nums) {
        freq[element] = (freq[element] || 0) + 1;

        if(freq[element] > maxCount){
            maxCount = freq[element];
            maxNum = element;
        }
    }

    // console.log(maxNum);

// * Question 4 (Easy) — Update User Age
    let user = {
        name: "Punit",
        age: 21
    };

    user.age = 22;

// * Question 5 (Moderate) — Print User Information
    for([key, value] of Object.entries(user)) {
        console.log(`${key}: ${value}`)
    }

// * 

// EMployee with highest salary - 
// let employees = {
//     emp1: 10000, 
//     emp2: 12000,
//     emp3: 8000
// }

// let highestSalary = 0; 
// let highestSalaryEmp = ""; 

// for(let key in employees){
//     if(employees[key] > highestSalary){
//         highestSalary = 
//     }
// }

// Q. 

let cart = [
  { name: "Mouse",    price: 500,   qty: 2 },
  { name: "Keyboard", price: 1000,  qty: 1 },
  { name: "Monitor",  price: 10000, qty: 1 }
];

function getCartTotal(cart){
    return cart.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);
};

// console.log(getCartTotal(cart));

// Q
function sumAll(...numbers){
    return numbers.reduce((acc, cur) => acc + cur);
}

// console.log(sumAll(10, 20, 30, 40, 50));

// Student Grade System - 

let students= [ 
    { 
        name:"Ritik",
        marks: [80,90,85]
    }, {
        name:"Aman", 
        marks: [50,40,60]
    }, {
        name:"Punit", 
        marks: [100, 98, 79]
    }, 
]

// * Question 12 (Hard) — Student Grade Report
function generateReport(students){
    return students.map(student => {
        let avg = Math.floor(student.marks.reduce((acc, cur) => acc + cur) / student.marks.length);
        let grade = avg >= 80 ? "A" : avg >= 60 ? "B" : "C";
        return {
            name: student.name,
            average: avg,
            grade
        }
    })
};

// console.log(generateReport(letstudents));

// * Q 🚀 Final Challenge (Very Hard) 
// Mini Library Management System
let books = [];
let id = 1;

function MakeBook(title, author){
    this.id = id++
    this.title = title,
    this.author = author,
    this.isBorrowed = false
}

function isBookAvailable(id){
    return books.find(book => book.id === id);
}

// Add a book -
function addBook(title, author){
    let newBook = new MakeBook(title, author);
    books.push(newBook);
}

addBook("Atomic Habbits", "James Clear");
addBook("Sapiens", "Henry Carl");

// Borrow a book -
function borrowBook(id){
    if(!isBookAvailable(id)){
        console.log(`The Book with id - ${id} does not exists`);
        return;
    }

    for (let book of books) {
        if(book.id === id){
            if(book.isBorrowed === true){
                console.log("This Book is Borrowed by another person, Please wait until they return it.");
                return -1;
            }
            book.isBorrowed = true;
            console.log("Book Borrowed Succecfully");
        }
    }
}

borrowBook(2);

// Return a Book -
function returnBook(id){
    if(!isBookAvailable(id)){
        console.log(`The Book with id - ${id} does not exists`);
        return;
    }

    for (let book of books) {
        if(book.id === id){
            book.isBorrowed = false;
        }
    }
}

returnBook(2);
returnBook(5);

// Display Available Books -
function showAvailableBooks(){
    console.log(books);
}

showAvailableBooks();
