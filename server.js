const express = require('express');
const app = express();
const path = require('path');
const templateH = require('express-handlebars');

// Routing
// app.get();
// app.post();


// HTML binding with JavaScript in a weird syntax

// Consider as a template engines

// app.engine('');
// app.set();

// views
// layouts
// main.handlebars
// index.handlebars
// dashboard.handlebars


let hbs = templateH.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        list: (items, options) => {
            let out = "<ul>";

            for (let i = 0, l = items.length; i < l; i++) {
                out = out + "<li>" + options.fn(items[i]) + "</li>";
            }

            return out + "</ul>";
        }
    },
    defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// SMALL API

// Use property from an OBJECT
// Looping   = #each
// Conditional Logic = #if


app.get('/', (req, res) => {

    let data = {
        burger: 'Macdonald',
        price: 4,
        title: "Home",
    };

    res.render('index', data);
});


app.get('/dashboard', (req, res) => {
    let data = {
        cars: [
            {model: 'BMW', price: 10000, status: true},
            {model: 'LAMBO', price: 300000, status: false},
            {model: 'MERCEDES', price: 10000, status: true}
        ],
        title: 'Dashboard'

    };
    res.render('dashboard', data);
});


app.listen(8080, () => console.log("App is starting on port ", 8080));

