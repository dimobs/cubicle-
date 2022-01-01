const express = require('express');
const path = require('path');
const routes = require('./routes');
const config = require('./config/config.json')[process.env_NODE_ENV || 'development'];

const app = express();
app.use(express.urlencoded({extended: true})) //body parser  
require('./config/handlebars')(app);
//const initHandlebars = require('./config/handlebars'); //алтернатива е горното 

app.use(express.static(path.resolve(__dirname, './public')));

app.use(routes);
const port = 3000;
app.listen(config.PORT, console.log.bind(console, `App is running on http://localhost${config.PORT}`));