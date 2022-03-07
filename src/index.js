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

// to set the view engine

app.set('view engine','hbs');

app.use(express.static(staticPath));

// template engine route

app.get('/',(req,res) => {
    res.render('index',{
        name: 'Rabi Kr Yadav',
    });
})

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

/*

Template Engines

A template engine enables you to use static template files in your application. At runtime,

The template engine replace variables in a template file with actual values and transforms the template into an HTML file sent to the client.

it mean we can use dynamic data in express.

Some popular template engines that work with express are.
Pug, Mustache, EJS, hbs, Dust and more.

The express application generator use 'Jade' as its default.

1) npm install hbs
2) mkdir views
3) touch index.hbs

*/

