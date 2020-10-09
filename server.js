const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Express App Config
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log("Starting server")
app.listen(PORT, ()=> console.log(`Started started on port: ${PORT}`));

//Middlewares

//MongoDB Config
const mongoURI = 'mongodb+srv://Joel:NkLCgEHAisM9VVOy@cluster0.gqssy.gcp.mongodb.net/blog-mern?retryWrites=true&w=majority';

mongoose
    .connect(process.env.DB_HOST, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })