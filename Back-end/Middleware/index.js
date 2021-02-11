const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'))

const realMatter = (req, res, next) => {
    const { password } = req.query;
    console.log(password)
    if (password.toLowerCase() === 'wach') {
        console.log('You got it');
        return next();
    }
    res.send('Sorry you need a password')
}
app.get('/dogs', realMatter, (req, res) => {
    res.send('Woof!')
})

app.get('/', (req, res) => {
    res.send('Home Page!');
})



app.listen(2000, () => {
    console.log('Yo Wach, your server is running')
})