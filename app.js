const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get('/', (req, res)=>{
    let token = jwt.sign({email: "yaagnik@gmail.com"}, "secret")
    res.cookie("token", token);
    res.send("done")

})

app.get('/read', (req,res) => {
    let data = jwt.verify(req.cookies.token, "secret");
    res.send(data)
})

app.listen(3000)










// $2b$10$sL.DqD0sz.WZRhp/Xk7zfeIgReY7aZ/KTwPdBSNujtgQ031/s9VRm