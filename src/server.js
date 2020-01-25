/*jshint esversion: 8 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//Initialization
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//para vistas hbs
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), //obtener direccion de /views
    // y concatenar con carpeta /layouts
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares

app.use(bodyParser.urlencoded({ extended: false })); // configurar en el servidor
//para recibir solo datos, no imagenes
app.use(methodOverride('_method')); // para recibir desde los formularios con distintos metodos: PUT, DELETE, etc
//configuraciones para autenticar
app.use(session({
    secret: 'mypasswordapp',
    resave: true,
    saveUninitialized: true
}));


//Global variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


//Static Files

app.use(express.static(path.join(__dirname, 'public')));

//Server listenning

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'))
});