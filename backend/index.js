require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.port || 3002;
const uri = process.env.MONGO_URL;

try {
    main().catch(err => console.log(err));
    async function main() {
        await mongoose.connect(uri);
        console.log("Connected to database")
    }

} catch (err) {
    console.log("Failed to connect to databse")
}



app.listen(port, () => {
    console.log("App is started")
})