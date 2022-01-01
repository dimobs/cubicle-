const express = require('express');
const path = require('path');

const app = express();
require('./confing/handlebars')(app);
//const initHandlebars = require('./confing/handlebars'); //алтернатива е горното 

app.use(express.static(path.resolve(__dirname, './public')));


const port = 3000;
app.all('/', (req, res) => {
    res.render('index')
});

app.listen(port, console.log.bind(console, `App is running on http://localhost${port}`));