const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });