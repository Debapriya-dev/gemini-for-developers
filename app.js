const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//add urlencoded middleware to parse form data
app.use(express.urlencoded({ extended: true }));


// Define a route that renders an EJS template
app.get('/', (req, res) => {
    res.render('index'); // Renders the 'index.ejs' template
});

//create a /greeting POST route with 'name' parameneter
app.post('/greeting', (req, res) => {
    const name = req.body.name;
    res.render('greeting', { name });
});

// Start the server
const port = 3000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//create a /greeting route that accepts a name parameter
app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.render('greeting', { name });
});

module.exports = { app, server };
