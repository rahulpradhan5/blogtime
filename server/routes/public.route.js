const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const jwt = require("jsonwebtoken");
const path = require('path');
require("dotenv").config();
const port = process.env.PORT || 4001;
const database = process.env.mongoDB;
const publicroute = require("/Nodejs/first/server/modals/public.category");

app.get('/:id', (req,res)=>{
    console.log(req.params.id);
});

module.exports = publicroute;