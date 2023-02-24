const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose')
const multer  = require('multer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.db, { useNewUrlParser: true })
.then(() => console.log('MongoDb Connected'))
.catch(err => console.log(err))



mongoose.set("debug", (collectionName, method, query, doc) => {
console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});



app.listen(process.env.PORT || 3000, function () {
    console.log(`the express is run on ` + (process.env.PORT || 3000))
})