let obj = {
    name: "Punit",
    age: 21, 
    skills: ["React", "JS", "Express"], 
    address: {
        city: "Udaipur", 
        country: "India",
        placesVisited: ["Jaipur", "Jk"]
    }
}

var user = {
    name: "Price Singh",
    age: 20,
    isHandsome: true,
    skills: ['HTML', 'CSS', 'JS'],
    college: {
        name: 'Sheryians Coding School',
        totalStudent: 200,
        courses: ['Web Development', 'Data Science', 'Campus placement']
    }
}

console.log(180 + user.college.courses[2]);

// console.log(Object.entries(obj));
// console.log(Object.values(obj));
// console.log(Object.keys(obj));

console.log(obj.skills[2]);

// Typeof of function expression

/* Bhaiya Please Explain this - 
function outer(){
    var num1 = 10;

    function inner(){
        console.log(num1);
        console.log(num2);
    } 

    var num2 = 20;

    return inner();
}

const output = outer();
output(); */
