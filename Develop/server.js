const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));

// api route
// html route
app.listen(port, () => {
  console.log('http://localhost/3001/');
});
