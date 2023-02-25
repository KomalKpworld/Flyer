const dotenv = require("dotenv");

dotenv.config();
const express = require('express');
var bodyParser = require('body-parser');
const flyerRoute = require('./routes/flyer-route.js');
const subflyerRoute = require('./routes/subflyer-route')
const uploadFileRoute = require('./routes/uploadimage-route')
const mongoose = require('mongoose')
const multer = require('multer')
const fileUpload = require("express-fileupload")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true
}))
mongoose.connect(process.env.db, { useNewUrlParser: true })
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err))


mongoose.set("debug", (collectionName, method, query, doc) => {
    
        console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
        });
        

    app.use('/', flyerRoute );
    app.use('/', subflyerRoute );
    app.use('/', uploadFileRoute);


app.listen(process.env.PORT || 3000, function () {
    console.log(`the express is run on ` + (process.env.PORT || 3000))
})

