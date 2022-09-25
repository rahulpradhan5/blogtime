const mongoose = require("mongoose");
require("dotenv").config();
const mongoDB = "mongodb+srv://rahul:rahul2003@cluster0.jytebtf.mongodb.net/videoblog?retryWrites=true&w=majority"
mongoose.connect(mongoDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database conected");
}).catch((error)=>{
    console.log(`Databse ${error}`);
})
