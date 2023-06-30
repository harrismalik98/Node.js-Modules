// The Wrapper Module in Node.js is a way to wrap a specific Node.js module with additional functionality.
// This is typically used when you want to extend or modify the behavior of an existing module.
//Node.js wraps every file with function(exports,require,module,__filename,__dirname){}, so we can use these key words.

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};
  
module.exports = generateRandomNumber;

console.log(generateRandomNumber()); 
console.log(__filename);
console.log(__dirname);
console.log(module);
console.log(exports);
console.log(require);

// (function(message){
//     const superHero = "Batman";
//     console.log(`${message} ${superHero}`);
// })("Hello");

// (function(exports,require,module,__filename,__dirname){
// });
