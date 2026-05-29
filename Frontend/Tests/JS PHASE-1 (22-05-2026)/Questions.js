// Q1. Check if a number is power of two or not.
// Q2. Check if a number is palindrome or not
// Q3. Check if a number is perfect square or not

// Ans1 - 1. this is my solution (which i found over optimized).
function isPowerOfTwo(num){
    if(num <= 0) return false;
    if(num === 1 || num === 2) return true;
    
    let exponent = 4;

    while(exponent <= num){
        if(exponent === num){
            return true;
        } 
        exponent *= 2;
    }
    
    return false;
}

// console.log(isPowerOfTwo(2));

// Ans1 - 2. this is optimized solution from chatgpt.
function isPowerOfTwo2(num){
    if(num < 1) return false;

    let power = 1;

    while(power < num){
        power *= 2;
    }

    return power === num;
}

// console.log(isPowerOfTwo2(275));

function isPalindromeNumber(num){
    let newNum = num;
    let reveredNum = "";
    
    while(newNum > 0){
        let rem = newNum % 10;
        reveredNum = reveredNum + rem;
        newNum = Math.floor(newNum / 10);
    }

    return Number(reveredNum) === num;
};

console.log(isPalindromeNumber(123454321));
