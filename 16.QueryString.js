const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res)=>{

    // console.log(req.url);

    const parsedUrl = url.parse(req.url);
    // console.log(parsedUrl);


    const query = querystring.parse(parsedUrl.query);
    // console.log(query);

    //The [Object: null prototype] message is simply indicating that the query object has no prototype chain, 
    //or in other words, it has no "parent" object from which it inherits properties and methods.
    //which is intentional in this case because query strings can contain arbitrary data.
    //Arbitary Data: does not follow any specific predefined structure or rules.

    console.log(JSON.stringify(query));


    res.end(`<h1>Welcome to Query String BuiltIn Module</h1>`);
});

server.listen(3000, ()=>{
    console.log("Server running at port: 3000");
});
