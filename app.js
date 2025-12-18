const express = require("express");
const path = require("path");

const app = express();

const port = 3001;

app.use(express.static(path.join(__dirname, '/public')));


app.put('/form', (req,res) => {
    res.json("New GET page");
    
})

app.use((req,res) => {
    res.status(404);
    res.send(`<h1 align="center">Error 404: Resource not found</h1>`);
})

app.listen(port, () => {
    console.log("App is listening on port " + port);
})

