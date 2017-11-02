const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

mongoose.connect('mongodb://localhost/shuhuang');

const app = express();
app.use(morgan('combined'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

router(app);

app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
