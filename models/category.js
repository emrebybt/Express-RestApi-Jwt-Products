const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: String,
    description: String    
})

module.exports = mongoose.model('category', CategorySchema)