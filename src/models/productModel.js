const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
    },	
    price: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('Product', productSchema)