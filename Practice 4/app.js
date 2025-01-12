const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const path = require("path");

const port = 3000;
app.use(cookieParser())
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    let token = jwt.sign({email: "moaz@example.com"}, "secret");
    res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.render("index");
});

app.get('/read', (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret");
    res.send(data)
});

app.listen(port)