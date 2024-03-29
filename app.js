const express = require("express");
const path = require("path");


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.listen(PORT, () => {
    console.log(`App is listening on port + ${PORT}`);
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "front", "reserve.html"));
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "front", "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "front", "tables.html"));
});



