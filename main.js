const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.setHeader('Accept-CH', 'UA, UA-Platform, UA-Arch');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(JSON.stringify(req.headers, null, 4));
});
app.listen(8000, () => {});
