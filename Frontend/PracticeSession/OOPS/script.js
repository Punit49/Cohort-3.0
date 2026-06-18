function abc(){
    console.log(this.name);
}

let obj = {
    name: "Punit"
}

// abc.call(obj);


const user= {
    name:"Ritik",
    greet() {
    console.log(this.name);
    }
};

const fn=user.greet.bind(user);
// fn();


// Call, apply and bind pe work kar
const animal= {
 eats:true
};

const dog = Object.create(animal)

dog.__proto__ = animal.Prototype;

console.log(dog.eats);
