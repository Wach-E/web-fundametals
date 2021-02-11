const express = require('express');
const app = express();
const port = 2500;
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res, next) => {
    res.render('home');
    next()
},
    (req, res) => {
        console.log('Sent rendered page');
    }
)

app.post('/', function (req, res) {
    res.send('Got a POST request');
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
})

app.listen(port, () => {
    console.log('Server is running');

})
