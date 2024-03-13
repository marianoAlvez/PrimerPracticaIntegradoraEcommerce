const mongoose = require("mongoose");

const collectionName = "products";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    imageUrls: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
});

const productsModel = mongoose.model(collectionName, productsSchema);
module.exports =  productsModel;