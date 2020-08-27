const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/movie", (req, res) =>{
    res.send("movie page");
});

app.get("/mypage", (req, res) =>{
    res.send("user");
});

app.get("/search", (req, res) =>{
    res.send("search");
});

app.listen(port, () => console.log("listening on port " + port));