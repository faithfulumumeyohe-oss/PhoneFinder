const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    brand: String,
    model: String,
    price: Number,
    ram: Number,
    storage: Number,
    battery: String,
    image: String,
    description: String
});

module.exports = mongoose.model("Phone", phoneSchema);