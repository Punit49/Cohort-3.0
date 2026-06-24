let a = 10;

function printA(){
    console.log(a);
}

function callA(){
    let a = 20;
    printA();
}

// callA(); // 10
// * callA me function call hua hai, so there is no clousre there, thats why jaha printA create hua hai uske parent ke scope ke a ki value print hogi.

// React -
const h1 = document.createElement("div");
h1.textContent = "I am REAL DOM";
document.body.append(h1);

const rH1 = React.createElement("h1", {}, React.createElement("span", null, "I am Span"));
// console.log(rH1);

// Appending react elements into root using reactDOM
// const root = document.querySelector("#root");
// const rootOfReact = ReactDOM.createRoot(root);
// rootOfReact.render(rH1);

// Why we cant render DOM in body

// Task - 
const reactElem = React.createElement("div", {className: "box"}, [
    React.createElement("h1", {}, React.createElement("span", {}, "I am a span")),
    React.createElement("h2", {}, React.createElement("span", {}, "I am a span 2"))
]);

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(reactElem);
