const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    imageUrl: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
})

module.exports = mongoose.model('product', ProductSchema)