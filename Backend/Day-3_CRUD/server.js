const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {
        "name": "Punit",
        "age": 22,
        id: 101
    }
]

app.post("/create", (req, res) => {
    const body = req.body;
    users.push(body);
    res.send("User Regstered successfully");
})

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== Number(id));
    res.send(users);
})

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    users = users.map((user) => {
        return user.id == id ? {...user, ...newUser} : user;
    });
    res.send(users);
})

app.get("/", (req, res) => {
    console.log("Current Users - ", users);
    res.send(users);
})


app.listen(3000, () => {
    console.log("Server running on - 3000");
})