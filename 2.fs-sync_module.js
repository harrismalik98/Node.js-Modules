const { readFileSync, writeFileSync } = require("fs");

const a1 = readFileSync("./main/a1.txt", "utf8");
const a2 = readFileSync("./main/a2.txt", "utf8");

console.log(a1,a2);
writeFileSync("./main/fullname.txt", `This is my full name: ${a1} ${a2}`, {
  flag: "w",
});


// The flag argument in fs.writeFileSync is an optional argument used to specify the behavior of the file system operation when writing to a file. The available options are:
// 'w': This is default flag tells the file system to open the file for writing and to truncate the file to zero length if it already exists. If the file does not exist, it will be created.
// 'wx': This flag is similar to 'w', but it will return an error if the file already exists.
// 'a': This flag tells the file system to open the file for writing and to append data to the end of the file if it already exists. If the file does not exist, it will be created.
// 'ax': This flag is similar to 'a', but it will return an error if the file already exists.
// 'r+': This flag tells the file system to open the file for reading and writing to an existing file, but it will not truncate the file. If the file does not exist, an error will be thrown.
// Truncate: truncating a file means to remove any data that was previously stored in the file and reset its size to zero.