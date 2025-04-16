const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get("/", (req, res) => {
    res.send("heyy");
})

app.get("/create", async(req, res) => {
    let user =await userModel.create({
        username: "isha",
        email: "isha@gmail.com",
        age: 20,
    });

    res.send(user)
})

app.get("/post/create", async(req, res) => {
    let post = await postModel.create({
        postdata: "Hello gys",
        user:"67ff2e945c1a68039790599a"
    })

    let user = await userModel.findOne({_id: "67ff2e945c1a68039790599a"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);