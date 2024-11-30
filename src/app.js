const express = require("express");
const path = require("path");
const app = express();

const hbs = require("hbs");
const router = require("../routes/main")
app.use("", router);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");
app.set(path.join(__dirname, "../public"));

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("listening on port 3000")
})
