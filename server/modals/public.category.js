const mongoose = require("mongoose");
const category = require("/Nodejs/first/server/modals/public.category");

const categorySchema = mongoose.Schema({
    name:{type:String} ,
    createdAt:
    {
        type: Date, 
        default: Date.now
    }
    
})

module.exports = mongoose.model('categorys', categorySchema);