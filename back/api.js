const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use('/match', require('./router/planning.router'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});