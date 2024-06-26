const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

// issue 1:
// but when we are sending data to server we dont send information about this data, meta-data or headers

// issue 2:
// when we are changin url parameters it still displays same "home page"

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    //   if we want provider headers we use res.writeHead(1.statusCode, 2. headers - media type - (MIME type))
    res.writeHead(200, { "content-type": "text/html" });
    //   its better to use res.write('code here');
    res.write(homePage);
    res.end();
  }
  //   about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  //   styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  //   logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  //   logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  //   404 not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(5000);
