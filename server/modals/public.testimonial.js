const mongoose = require("mongoose");
const testimonials = require("/Nodejs/first/server/modals/public.testimonial");

const testimonialSchema = new mongoose.Schema({
    userimage: {
        type: String,
    },
    testimonial: {
        type: String,
    },
    createdAt: {
        type: Date,
        defult: Date.now
    }
});

module.exports = mongoose.model('testimonial', testimonialSchema);