const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./db/conn")
const ejs = require("ejs");
const jwt = require("jsonwebtoken");
const path = require('path');
require("dotenv").config();
const port = process.env.PORT || 4001;
const database = process.env.mongoDB;
const catdata = require("./modals/public.category");
const videodata = require("./modals/public.video");
const contact = require("./modals/public.contact");
const testimonial = require("./modals/public.testimonial");
const routes = require("./routes/public.route");
var flash = "";

// server 
app.listen(port, async () => {
    console.log(`server starts at :- ${port}`);

})

//set view engine
app.set('view engine', 'ejs');

//use static files
app.use('/', express.static(path.join(__dirname, '../public')));

//user body parser for get value of post req
app.use(bodyParser.json());
app.use(express.urlencoded());

//rendering and routing

// index page or home page render
app.get('/', async (req, res) => {
    const cat = await catdata.find({}).limit(6);
    const vblog = await videodata.find({}).sort({"title":-1}).limit(9);
    res.render('index', {
        cat,
        vblog
    });

})

// about page render
app.get('/about', (req, res) => {
    res.render('about');
})

// contact page render
app.get('/contact', async(req, res) => {
    const testis = await testimonial.find({}).limit(4);
    res.render('contact',
    {
        flash,testis
    });
})

// video page render
app.get('/videopage', async (req, res) => {
    const videos = await videodata.find({
        _id: req.query.id
    });
    res.render('videopage', {
        videos
    });
})

// 404 page render
app.get('*', (req, res) => {
    res.render('404');
});


/*
---------------------------------------------------
POST REQUESTES
----------------------- ----------------------------
*/


app.post("/ajax", async (req, res) => {
    const catId = req.body.categoryName;
    if (catId == "all") {
        var videos = await videodata.find({}).sort({"title":-1}).limit(9);
    } else {
        var videos = await videodata.find({
            categoryId: catId
        }).sort({"title":-1}).limit(9);
    }
    res.render('categoryvideo', {
        videos
    });
})

app.post("/contact", async (req, res) => {
    try {
        const contactsub = await contact.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
          });
          var flash = "success";
           
    } catch (error) {
        console.log("inserted"+error);
        var flash = "failed";
    }   
    console.log(flash);
    res.render('contact',{ 
        flash  });
})