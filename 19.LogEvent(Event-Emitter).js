const { format } = require("date-fns");
const { v4:uuid } = require("uuid");

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

const fs = require("fs");

// The below line of code imports the built-in Node.js module called "fs", which stands for "file system". It then accesses a property of the "fs" module called "promises", 
// which contains methods that allow asynchronous file system operations to be performed using promises instead of callbacks.
const fsPromise = require("fs").promises;
const path = require("path");


myEmitter.on("log", (msg) => {
    const dateTime = `${format(new Date(), "dd/MM/yyyy\thh:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${msg}\n`;
    console.log(logItem);
    try{
        // fs.existsSync() is a method that checks whether a given file or directory exists in the file system or not.
        if(!fs.existsSync(path.join(__dirname, "logs"))){
            fsPromise.mkdir(path.join(__dirname, "logs"));

            // Below one is with callbacks
            // fs.mkdir(path.join(__dirname, "logs"), err => {
            //     if(err){
            //         console.log(err);
            //     }
            //     else{
            //         console.log("Successfully with callback not Promises");
            //     }
            // });
        }
        fsPromise.appendFile(path.join(__dirname, "logs", "eventLog.txt"),  logItem);
    }
    catch(error){
        console.log(error);
    }
});

myEmitter.emit("log", "Log Event");