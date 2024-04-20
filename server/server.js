const express = require('express');
const app = express();
const port = 3001; // Make sure this port is different from the client's port

app.get('/', (req, res) => {
  res.send('Hello World from the server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
