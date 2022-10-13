const express = require('express');
const chalk = require('chalk');             // change color in command line
const debug = require('debug')('app');      // show what's actually working 
const morgan = require('morgan');           
const app = express();                      
const port = 3000;                          // port (localhost)
const path = require('path');               // path (locate the folders or files)

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')))

app.get("/", (req,res) =>{

    res.send("Hello Bright");

})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.blueBright(" : " + port));
})