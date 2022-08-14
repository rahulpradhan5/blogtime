const mongoose = require("mongoose");
const category = require("/Nodejs/first/server/modals/public.video");

const videoblogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    discription: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    video: {
        type: String,
    },
    categoryId: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        defult: Date.now
    }
});


module.exports = mongoose.model('videoblog', videoblogSchema);