const http = require('http');
const fs = require('fs');
const multer = require('multer');  //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

const upload = multer({ dest: 'uploads/' });

const server = http.createServer((req, res) => {

  if (req.method === 'POST') {
    upload.single('file')(req, res, err => {
      if (err) throw err;
      fs.readFile(req.file.path, (err, data) => {
        if (err) throw err;
        res.write(`
          <h1>Uploaded File Data</h1>
          <p>File name: ${req.file.originalname}</p>
          <p>Path: ${req.file.path}</p>
          <p>File size: ${req.file.size} bytes</p>
          <h3>File data:</h3>
          <p>${data.toString()}</p>
        `);
        res.end();
      });
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
