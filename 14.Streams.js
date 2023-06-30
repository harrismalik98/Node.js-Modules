const {createReadStream} = require("fs");

//By default buffer size is 64kb. We can increase the buffer size by using {highWaterMark: 9000, encoding:"utf-8"}.
const stream = createReadStream("./main/big.txt", {highWaterMark: 100000});

// "data" takes data in chunk. Default size is 64kb.
stream.on("data", (result) => {
    console.log(result);
});

stream.on("error", (error) => {console.log(error)});


// Streams can make it easier to work with large data as it becomes available, 
// rather than waiting for the entire data set to be loaded like fs.readFile().