// Require Express
const express = require("express");
//Express server handling requests and responses
const app = express();
// Make everything inside of public/ available
app.use(express.static("public"));

app.get("/", (request, response, next) =>
    response.sendFile(__dirname + "/views/home.html"))

app.get("/about", (request, response, next) =>
    response.sendFile(__dirname + "/views/about.html"))

app.get("/works", (request, response, next) =>
    response.sendFile(__dirname + "/views/works.html"))

app.get("/photo-gallery", (request, response, next) =>
    response.sendFile(__dirname + "/views/photoGallery.html"))

app.get("/nav", (request, response, next) =>
    response.sendFile(__dirname + "/views/nav.html"))

app.listen(3000)


