const url = require('url');
const myUrl = new URL('https://www.example.com:3000/path?name=value#fragment');

console.log("Protocol: " + myUrl.protocol);
console.log("Hostname: " + myUrl.hostname);
console.log("Port: " + myUrl.port);
console.log("Pathname: " + myUrl.pathname);
console.log("Search: " + myUrl.search);
console.log("Fragment: " + myUrl.hash);


const myURL = 'https://www.example.com:8080/path?name=value#fragment';
const parsedURL = url.parse(myURL);

console.log(parsedURL); //Gives all the info about URL.
