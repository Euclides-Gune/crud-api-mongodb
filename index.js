const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

app.get('/', (request, response) => {
    response.send("Hello from node API");
});

mongoose.connect("mongodb+srv://es7comercial:Tt7AQFrREgySQr2D@cluster0.dbu3o7f.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to database");
    app.listen(3000, () => console.log("server running"));
}).catch(() => console.log('Failed to connect databse!'));