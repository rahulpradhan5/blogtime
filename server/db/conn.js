const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.mongoDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database conected");
}).catch((error)=>{
    console.log(`Databse ${error}`);
})