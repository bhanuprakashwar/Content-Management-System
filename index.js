var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./route/route');

//Connection to mongo
mongoose.connect('mongodb://localhost:27017/contactlist');


mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB');
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Connection couldnt establish to mongoDB');
    }
});
const port = 3000;


//Middleware
app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/', (req, res) => {
    res.send('Working!');
})

app.listen(port, () => {
    console.log('Listening at:' + port);
});


