const express = require('express');
const chalk = require('chalk');             // change color in command line
const debug = require('debug')('app');      // show what's actually working 
const morgan = require('morgan');           
const path = require('path');               // path (locate the folders or files)

const app = express();                      
const PORT = process.env.PORT || 4000;                          // port (localhost)


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')))

app.get("/", (req,res) =>{

    res.send("Hello Bright");

})

app.listen(PORT, ()=>{
    debug("Listening on port" + chalk.blueBright(" : " + PORT));
})