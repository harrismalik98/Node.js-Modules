const {writeFileSync} = require("fs");

for(let i=0; i<10000; i++)
{
    writeFileSync("./main/big.txt", `Roll Number: ${i}\n` , {flag: "a"});
}

// Above code is for creating a BIG File.
