const express = require("express");
const app = express();
const mongoose = require('mongoose');


const indexRouter = require('./router/index');
const aboutRouter = require('./router/about');

mongoose.connect('mongodb://localhost:27017/StudentInfo');

mongoose.connection
    .once('open', function () {
        console.log('MongoDB running');
    })
    .on('error', function (err) {
        console.log(err);
    });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.listen(3000, function () {
    console.log("Listening on port 3000")
})