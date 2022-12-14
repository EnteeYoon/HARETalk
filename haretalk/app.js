const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const router = express.Router();
const hostname = "127.0.0.1";
const PORT = 8080;

const WEBPATH = "./template";

app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile(`${WEBPATH}/home.html`, (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send("<h1>500: Internal Server Error</h1>");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

router.route('/login').get((req, res)=>{
  res.render(`${WEBPATH}/login.html`);
});

app.get("/", (req, res) => {
  fs.readFile(`${WEBPATH}/login.html`, (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send("<h1>500: Internal Server Error</h1>");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.use(function(req, res, next){
  console.log('error: Not Found');
  res.status(404).send('<h1>404: Not Found</h1>');
});

server.listen(PORT, () => {
  console.log(`Server running on http://${hostname}:${PORT}/`);
});
