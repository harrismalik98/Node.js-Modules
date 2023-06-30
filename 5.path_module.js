const path = require("path");

console.log(`Separator: ${path.sep}`);


const filePath = path.join("/main", "sub", "submain.js");
console.log(`Join: ${filePath}`);


const baseName = path.basename(filePath);
console.log(`Basename: ${baseName}`);


const extensionName = path.extname(filePath);
console.log(`Extension: ${extensionName}`);


const parse = path.parse('/home/user/dir/file.txt');
console.log(parse);


const format = path.format({
  root: "/ignored",
  dir: __dirname + "/main/sub",
  base: "submain.js",
});

console.log(`Format: ${format}`);


const absolute = path.resolve("main", "sub", "subSub/a");
console.log(`Absolute: ${absolute}`);


const windowsPath = "C:\\Users\\User\\Documents\\file.txt";
const unixPath = path.normalize(windowsPath).replace(/\\/g, '/'); //convert windows path to unix path
console.log(unixPath); // Output: /C/Users/User/Documents/file.txt


const system = path.win32;
console.log(system);

console.log(`Delimeter: ${path.delimiter}`);


//Path: The Path module provides a way of working with directories and file paths.

// 1. join(): Join the path.
// 2. basename(): Tells the name of file and extension.
// 3. resolve(): Gives absolute path(Path from root)
// 4. extname(): Gives extension of the file
// 5. parse(): Gives all detail about the path meaning: root, dir, base, ext, filename
// 6. format(): We give information and convert it into path.Alternate of parse()
// 7. normalize(): function that can be used to convert a file path from one format to another.
// 8. win32: Returns an object containing Windows specific properties and methods
// 9. delimiter: Returns the delimiter specified for the platform