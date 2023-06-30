const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("request", (name, age)=>{
console.log(`Name: ${name}
Age: ${age}`);
});


customEmitter.on("request" , () => {
    console.log("Without Arguments");
});

customEmitter.emit("request");

customEmitter.emit("request", "Muhammad Harris", 24);


// Event module in Node.js is a module that provides an event-driven programming model for building applications.
// It allows you to create and emit custom events that can trigger specific actions in your application. 
// The Event module provides an EventEmitter class that you can use to create event emitters and listeners.
// Event emitters emit events, while event listeners receive and handle those events.

// Advantages: 
// Asynchorous Processing: handle events asynchronously, which can help to improve the performance and scalability of Node.js applications.
// Customization: Define their own custom events to handle specific actions,
// Code organization: Events can help to organize code and logic into smaller, more manageable pieces, which can make it easier to maintain and update.

// Event Emiiter Object emits events and allows developers to register and handle event listeners. When an event is emitted, all registered listeners for that event are triggered in the order they were registered.


// Some time Event automatically emit 2 times because at first it goes to "/" route then "/favicon.ico"
// https://www.youtube.com/watch?v=-JfizEufGAE