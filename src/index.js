// npm init
// touch app.js
// npm install express

const express = require('express');     // import express module

const app = express();      // this function for express app

// app.get(route, callback);

/*
The callback function has 2 paramenters, request(req) response(res).
The request object(req) represents the HTTP request and
has properties for the request query string, paramenters, body, HTTP headers, ec.

Similarly, the response object represents the HTTP response that the express app sends when it receives an HTTP request
*/

// builtin middleware
const path = require('path');   // importing path module for absolute path
const staticPath = path.join(__dirname,'../public');    // getting static folder absolute path
app.use(express.static(staticPath));

const port = 8000;

app.get('/', (req, res) => {
    res.send('hello from the express server');
});

app.get('/about', (req, res) => {
    res.send('hello from the express in about page');
});

app.listen(port, () => {
    console.log(`listing the port at ${port}`);
});