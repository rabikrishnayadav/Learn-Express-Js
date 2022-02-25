const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('This is Home page');
});

app.get('/about', (req, res) => {
    res.send('This is About page');
});

app.get('/contact', (req, res) => {
    res.send('This is Contact page');
});


app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});