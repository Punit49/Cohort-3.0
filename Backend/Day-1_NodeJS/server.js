const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Hello World");
    res.end("Request Recieved");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is runnning on PORT - ${PORT}`);
})

