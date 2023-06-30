const express = require("express");
const app = express();

app.get("/", (req, res)=>{

    console.log(req.query);
    // res.send(`<h1>ID: ${req.query.id} </h1>
    //           <h1>Name: ${req.query.name} </h1>
    //           <h1>City: ${req.query.city} </h1>`);

    res.send(`<h1>Welcome to Query String with Express</h1>`);
});

app.listen("3000", ()=>{
    console.log("Server running at port: 3000");
});


// http://localhost:3000/?id=10&name=harris&city=Wah%20cantt
// Value stores in Key Value pair. & is the parameter separator in Query String.