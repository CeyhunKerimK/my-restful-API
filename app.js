const express = require("express");
const fs = require("fs");
const userRouter = require("./router/imgRouter");
require("./db/dbBaglantisi");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => res.json({
  mesaj : "şu an index sayfasındasınız."
}));

app.use("/api/images",userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
