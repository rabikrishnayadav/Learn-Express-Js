const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.write('<h1>This is Home page</h1>');
    res.send();
});

app.get('/about', (req, res) => {
    // res.write('<h1>This is About page</h1>');
    res.send([
        {
        id: 1,
        name: 'Rabi',
        },
        {
        id: 2,
        name: 'Krishna',
        },
        {
        id: 3,
        name: 'Yadav',
        },
    ]);
});

app.get('/contact', (req, res) => {
    res.send('<h1>This is Contact page</h1>');
});


app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});