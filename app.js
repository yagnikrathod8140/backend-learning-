const express = require('express');
const app = express();

const userModel = require("./usermodul")

app.get('/', (req, res) => {
    res.send('hey')
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "isha",
        email: "isha@gmail.com",
        username: "isha"
    })
    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "yagnik"}, {name: "yagnik rathod"}, {new: true})
    res.send(updateduser);
})

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get('/read-1', async (req, res) => {
    let users = await userModel.findOne({username:"isha"});
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({username:"isha"});
    res.send(users);
})

app.listen(3000)