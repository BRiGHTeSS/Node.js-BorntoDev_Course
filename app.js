const express = require('express');
const chalk = require('chalk');             // change color in command line
const debug = require('debug')('app');      // show what's actually working 
const morgan = require('morgan');           
const path = require('path');               // path (locate the folders or files)
const products = require("./data/products.json");       // data products path (locate the folders or files of products)
const productRouter = express.Router();

const app = express();                      
const PORT = process.env.PORT || 4000;                          // port (localhost)


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req,res) =>{
    res.render("products",
        products,
    );
});

productRouter.route("/1").get((req,res) =>{
    res.send("Hello World !! I'm Product1");
});

app.use("/products", productRouter)

app.get("/", (req,res) =>{

    res.render("index",{username: 'Brighttt', customers: ["BrighteSS","Bowornrat","Boworn"]});

})

app.listen(PORT, ()=>{
    debug("Listening on port" + chalk.blueBright(" : " + PORT));
})