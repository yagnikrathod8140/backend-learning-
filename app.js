const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get('/', (req, res)=>{

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("yagnik", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
            
        });
    });
   // Load hash from your password DB.

bcrypt.compare("yagnik", "$2b$10$1HeHVr94ydvKHu2XIs.q6upL8yvP1H/M9B7FUR4KWTp7DBpatd9mO", function(err, result) {
    // result == true
    console.log(result);
    
});
})

app.listen(3000)










// $2b$10$sL.DqD0sz.WZRhp/Xk7zfeIgReY7aZ/KTwPdBSNujtgQ031/s9VRm