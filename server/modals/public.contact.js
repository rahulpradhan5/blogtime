const mongoose = require("mongoose");
const contact = require("/Nodejs/first/server/modals/public.contact");

const contactSchema = mongoose.Schema({
    name:{type:String} ,
    email:{type:String} ,
    subject:{type:String} ,
    message:{type:String} ,
    createdAt:
    {
        type: Date, 
        default: Date.now
    }
    
})

module.exports = mongoose.model('contact', contactSchema);