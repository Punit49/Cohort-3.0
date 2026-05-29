// ? JavaScript Beginner Practice Questions (Phase -1 ).

// * Q1. Create two variables and swap their values.

    // let a = 10;
    // let b = 5;

    // console.log(a, b);

    // a = a + b;
    // b = a - b;
    // a = a - b;

    // console.log(a, b);

// * Check whether a year is a leap year.

    // let year = 2000;

    // if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    //     console.log("Leap Year");
    // } else {
    //     console.log("Not a Leap Year");
    // }

// * Check whether a character is a vowel or consonant.
    let char = "p";
    let charCode = char.charCodeAt(0);

    if(charCode >=  97 && charCode <= 122){
        if("aieou".includes(char[0])){
            console.log("Vowel");
        } else {
            console.log("consonant")
        }
    } else {
        console.log("Not a valid alphabet");
    }

// * Create a calculator using switch statement.

    let val1 = 10;
    let val2 = 20;
    let operator = "/";
    let result;

    switch(operator){
        case "+" :
            result = val1 + val2;
            break;
        case "-": 
            result = val1 - val2;
            break;
        case "*" :
            result = val1 * val2;
            break;
        case "/": 
            result = val2 !== 0? val1 / val2 : "Cannot divide by zero";
            break;
        case "%": 
            result = val2 !== 0? val1 % val2 : "Cannot divide by zero";
            break;
    }

    // console.log(result);

// * Find the greater number between two values using ternary operator.

    let grt = val1 > val2 ? val1 : val2;
    // console.log(grt);

// * Convert temperature from Celsius to Fahrenheit -
    let cel = 35;
    let fah = cel * (9 / 5) + 32;
    // console.log(fah);

// * Check whether a string starts with a specific letter.
    let myStr = "Punit";
    console.log(myStr[0]);
    if(myStr.toLowerCase().charCodeAt(0) >= 97 && myStr.toLowerCase().charCodeAt(0) <= 122){
        console.log("yes");
    } else {
        console.log("No")
    }

// * Generate a random OTP of 4 digits.
    let otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp); 

// * Reverse a 3-letter string manually.
    const letters = "ABC".split("");
    
    letters[0]
    console.log(letters);
