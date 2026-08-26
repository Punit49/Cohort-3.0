// const http = require("http");

// const server = http.createServer((req, res) => {
//     if(req.url === "/users"){
//         res.end("Users Data");
//     }
//     else if(req.url === "/auth"){
//         res.end("auth Data");
//     }
//     else if(req.url === "/products"){
//         res.end("products Data");
//     }
//     else res.end("Invalid Request"); 
//     // this all is the main problem with node http, so we use express framework
// });

// server.listen(3000, () => {
//     console.log("Server running...");
// });

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Data sent");
})

app.get("/users", (req, res) => {
    res.send("users sent");
})

app.get("/products", async (req, res) => {
    try {
        const result = await fetch("https://fakestoreapi.com/products");
        const data = await result.json();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send("Error - ", error);
    }
})

app.post("/create", (req, res) => {
    console.log(req.body);
    res.send("CREATED");
})


app.listen(3000, () => {
    console.log("Server is running on 3000");
})

