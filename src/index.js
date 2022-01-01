const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
require('./confing/handlebars')(app);
//const initHandlebars = require('./confing/handlebars'); //алтернатива е горното 

app.use(express.static(path.resolve(__dirname, './public')));

app.use(routes);
const port = 3000;
app.listen(port, console.log.bind(console, `App is running on http://localhost${port}`));