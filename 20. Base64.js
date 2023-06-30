const myData = 'Hello, world!';
const encodedData = Buffer.from(myData).toString('base64');
console.log(encodedData);

const decodedData = Buffer.from(encodedData, 'base64').toString();
console.log(decodedData);


// Base64 is a way to represent binary data, such as images or files, as text so that it can be easily transmitted or stored. 
//In Node.js, you can use the built-in Buffer module to encode and decode data in Base64 format.
