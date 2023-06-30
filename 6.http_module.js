const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === "/"){
    res.end(`
  <h1>My HTTP Module</h1>

  <a href = 'http://localhost:3000/'>HOME</a>
  <a href = 'http://localhost:3000/about'>ABOUT</a>
  <a href = 'http://localhost:3000/services'>SERVICE</a>
  <a href = 'http://localhost:3000/contact'>CONTACT</a>
  `);
  }
  else if (req.url === "/about") {
    res.end(`<h1>Welcome to our About page</h1>`);
  }
  else if (req.url === "/contact") {
    res.end(`<h1>Welcome to our Contact page</h1>`);
  }
  else if (req.url === "/services") {
    res.end(`<h1>Welcome to our Service page</h1>`);
  }
  else{
    res.writeHead(404, {"content-type": "text/html"});
    res.end("<h1>404: Page doesn't exist.</h1>");
  }

});

server.listen(3000, () => {
  console.log('Server running at port: 3000');
});


// HTTP: Create HTTP server and handle HTTP client requests

// const options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/api/users',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// const req = http.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);
// });

// The http.request() method is used to make outgoing HTTP requests from your Node.js application to other servers, and cannot be used to respond to incoming HTTP requests from clients.
// Outgoing Request means that dealing with Rest API's like Fetching data from REST API by sending a "GET", create "POST", update "PUT, PATCH", and delete "DELETE".

// Incoming HTTP requests are requests made by clients to servers, and outgoing HTTP requests are requests made by servers to other servers.