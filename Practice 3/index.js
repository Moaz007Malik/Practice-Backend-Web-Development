const express = require('express');
const app = express();
const port = 3000;

const userModel = require("./usermodel");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Tinku",
        username: "Minku",
        email: "moaz@Rinku.com",
        password: "TIRIRIRIRI"
    })

    res.send(createdUser);
});

// Read All Users
app.get('/read', async (req, res) => {
    let users = await userModel.find({});
    res.send(users);
});

// Read Single User
app.get('/read/:id', async (req, res) => {
    let user = await userModel.findOne({_id: req.params.id});
    res.send(user);
});
// Or
app.get('/readSingle', async (req, res) => {
    let users = await userModel.find({name: "Jan Dhoe"});
    res.send(users);
});

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({
        name: "John Doe"
    }, {
        name: "Jan Dhoe",
        username: "JohnDoe123",
        email: "johndoe@example.com",
        password: "password123"
    }, {
        new: true
    })

    res.send(updatedUser);
});

app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({name: "Tinku"});
    res.send(deletedUser);
});

app.listen(port);