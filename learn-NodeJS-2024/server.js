const express = require('express');
const app = express();
const port = 3001; // Change the port number

server.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
