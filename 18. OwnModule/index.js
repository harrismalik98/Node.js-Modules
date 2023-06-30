const { add, sub, mult, div } = require("./oper");

console.log(`Addition: ${add(5, 10)}`);
console.log(`Subtract: ${sub(10, 5)}`);
console.log(`Multiply: ${mult(5, 5)}`);
console.log(`Division: ${div(25, 5)}`);

// "include module" in Node.js refers to the process of using the require keyword to load external modules into your application. And this allows you to use functions and variables defined in that module. In Node.js every file is a Module. We use that module variables or functions by using "require" function.