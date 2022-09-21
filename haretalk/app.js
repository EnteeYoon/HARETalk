const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const hostname = '127.0.0.1';
const PORT = 8080;

const WEBPATH = "./template";

app.use(express.static("public"));

app.get("/", (req, res) => {
    fs.readFile(`${WEBPATH}/login.html`, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).send("<h1>500 Error</h1>");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://${hostname}:${PORT}/`);
});