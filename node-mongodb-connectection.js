// mongodb

const mongoose = require("mongoose");

const connectMongoDb = (url) => {
    try {
        mongoose.connect(url)
    } catch (error) {
        console.log(error, "Error in mongodb");
    }
}

// index.js file

connectMongoDb("url for mongodb")