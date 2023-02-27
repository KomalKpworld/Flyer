const dotenv = require("dotenv");
const cors = require('cors');
const path = require('path');
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
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");

    next();
  });

  
app.use(cors());
app.use(express.json());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

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


app.use('/', flyerRoute);
app.use('/', subflyerRoute);
app.use('/', uploadFileRoute);


app.listen(process.env.PORT || 3001, function () {
    console.log(`the express is run on ` + (process.env.PORT || 3001))
})

