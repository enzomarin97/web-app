const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.frusthx.mongodb.net/WebApp?retryWrites=true&w=majority`, ()=>{
    console.log('connected to MongoDB')
})