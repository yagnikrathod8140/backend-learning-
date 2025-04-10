const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.get("/", function(req, res){
    res.send("chal raha hai");
});

app.listen(3000, function(){
    console.log("it runing");
})