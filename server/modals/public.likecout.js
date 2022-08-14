const mongoose = require("mongoose");
const category = require("/Nodejs/first/server/modals/public.likecout");

const likecountSchema = mongoose.Schema({
    like:{type:String} ,
    blogId:{type:String} ,
    createdAt:
    {
        type: Date, 
        default: Date.now
    }
    
})

module.exports = mongoose.model('likecount', likecountSchema);