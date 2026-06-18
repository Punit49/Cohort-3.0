let p1 = new Promise((res, rej) => {
    if(false){
        console.log("Resolved");
    } else {
        console.log("Rejected");
    }
});

console.log(p1);