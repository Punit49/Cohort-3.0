// ? You are given an array of student objects. Each student has a name and marks. Return the name of the student who has the highest marks. If multiple students have the same highest marks, return the first one.

const students = [
    {
        name: "Punit", 
        marks: 89
    }, {
        name: "Sarthak", 
        marks: 92
    }, {
        name: "Ritik", 
        marks: 87
    }
]

function getHighestStudent(students){
    let highest = students[0];

    for(let i = 1; i < students.length; i++){
        if(students[i].marks > highest.marks){
            highest = students[i];
        }
    }

    return highest.name;
}

console.log(getHighestStudent(students));

function countWords(sentence){
    let frequency = {};
    words = sentence.split(" ");
    
    for (const word of words) {
        word = word.toLowerCase();
        frequency[word] = (frequency[word] || 0) + 1;
    }

    return frequency;
}

console.log(countWords("Javascript is fun"))