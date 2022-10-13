const express = require('express');
const chalk = require('chalk');             // change color in command line
const debug = require('debug')('app');      // show what's actually working 
const morgan = require('morgan');
const path = require('path');               // path (locate the folders or files)

const app = express();
const PORT = process.env.PORT || 4000;      // port (localhost:3000 or 4000)
const productsRouter = require("./src/router/productsRouter");


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter)

app.get("/", (req, res) => {

    res.render("index", { username: 'Brighttt', customers: ["BrighteSS", "Bowornrat", "Boworn"] });

})

app.listen(PORT, () => {
    debug("Listening on port" + chalk.blueBright(" : " + PORT));
})