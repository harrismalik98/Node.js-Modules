const { readFile, writeFile } = require("fs");

const a1 = readFile("./main/a1.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const a1 = result;

  readFile("./main/a2.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const a2 = result;
  

  writeFile(
    "./main/result-async.txt",
    `Full Name: ${a1} ${a2}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
});
});


