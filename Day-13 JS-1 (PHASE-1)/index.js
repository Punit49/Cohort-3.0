// Scope of let var and const

// var
    function hello(){
        if(true){
            const a = 10;
        }

        console.log(a);
    }

    // hello();

    // console.log(a2);
    // var a2 = 22;

    // variable4();
    // var variable4 = () => {
    //     console.log("Hello");
    // }

console.log(i); 

for(var i = 1; i <= 5; i++){
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 100);
}

console.log(i);
