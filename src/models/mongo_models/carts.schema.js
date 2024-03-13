import mongoose from "mongoose";

const collectionName = "carts";

const cartsSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
});

export const cartsModel = mongoose.model(collectionName, cartsSchema);