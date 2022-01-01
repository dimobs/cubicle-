const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('.hbs', engine({ extname: '.hbs' })); //първото .hbs е разширение за експрес, второто .hbs е за разширение на handlebars
app.set('view engine', 'hbs'); //когато пишем 'home' да не слагаме 'home.hbs'
app.set('views', path.resolve('./src/views')) //ako views не е първно ниво




const port = 3000;
app.all('/', (req, res) => {
    res.render('index', {layout: false})
});

app.listen(port, console.log.bind(console, `App is running on http://localhost${port}`));