const express = require('express');
const app = express();

const hbs = require('hbs');
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:
hbs.registerPartials((__dirname, 'views/partials'));

const router = require("./config/routes.config");
app.use(router);

app.listen(3000, () => console.log('🏃‍ on port 3000'));
