const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log('Request received!');
    next();
});

module.exports = app;