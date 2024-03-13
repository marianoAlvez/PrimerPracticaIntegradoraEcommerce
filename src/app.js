const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/products.route');
const cartRouter = require('./routes/carts.route');
const multer = require('./utils');

//Declarando Express para usar sus funciones.
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);



const port = 8080; //todo pasar a .env
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const connectMongoDB = async ()=>{
    const stringConnection = 'mongodb://localhost:27017/ecommerce?retryWrites=true&w=majority' //todo pasar a .env
    try {
        await mongoose.connect(stringConnection);
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();