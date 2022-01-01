const { engine } = require('express-handlebars');
const path = require('path');



const initHandlebars = (app) =>{
app.set('view engine', 'hbs'); //когато пишем 'home' да не слагаме 'home.hbs'
app.engine('.hbs', engine({ extname: '.hbs' })); //първото .hbs е разширение за експрес, второто .hbs е за разширение на handlebars
app.set('views', path.resolve(__dirname, '../views')) //ako views не е главната директория
}
module.exports = initHandlebars;