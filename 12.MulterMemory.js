const http = require('http');
const fs = require('fs');
const multer = require('multer');  //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

const upload = multer({ storage: multer.memoryStorage() }); //It stores the file in memory rather than local.

const server = http.createServer((req, res) => {

  if (req.method === 'POST') {
    upload.single('file')(req, res ,(err) => {
      if (err) {
        return res.send(err.message);
      }
        const fileData = req.file.buffer.toString("utf8");//Data read from req.file.buffer convert it to string in utf8 encoding.
        res.write(`
          <h1>Uploaded File Data</h1>
          <p>File name: ${req.file.originalname}</p>
          <p>File size: ${req.file.size} bytes</p>
          <h3>File data:</h3>
          <p>${fileData}</p>
        `);
        res.end();
    });
  } else {
    res.write(`
      <h1>Please Upload File</h1>
      <form action="/" method="post" enctype="multipart/form-data">
        <input type="file" name="file"><br>
        <button style="margin-top:20px;" type="submit">Upload</button>
      </form>
    `);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
