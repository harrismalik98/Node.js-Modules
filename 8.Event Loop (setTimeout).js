setTimeout(print,5000);

function print(){
    console.log("Log after 5 sec");
}

console.log("First Log");

setTimeout(function() {
    console.log("Log after 3 sec");
  }, 3000);
  
console.log("Second Log");


// The event loop in JavaScript is a mechanism that is responsible for managing the execution of code in a non-blocking, asynchronous way.
// It works by continuously checking the call stack and the event queue for tasks to execute. When there are no tasks to execute, it waits for new tasks to be added to the event queue.

// When you add a timer with your function using setTimeout, it creates a timer that waits for the specified amount of time (in milliseconds) 
// before adding the function to the Event Queue. Once the timer expires and the function is added to the Event Queue, 
// it waits until the Call Stack is empty before moving the function to the Call Stack for execution.