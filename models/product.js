const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    imageUrl: String,
    // categoryId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'category'
    // }
    category: String
});

module.exports = mongoose.model("product", ProductSchema);