const express = require('express');
const app = express();
const morgan = require('morgan')
const AppError = require('./AppError')

app.use(morgan('tiny'))

const realMatter = (req, res, next) => {
    const { password } = req.query;
    console.log(password)
    if (password === 'wach') {
        console.log('You got it');
        return next();
    }
    throw new AppError('Password Required', 401)
}
app.get('/dogs', realMatter, (req, res) => {
    res.send('Woof!')
})

app.get('/errors', (req, res) => {
    cruise;
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin', 403)
})

app.get('/secrets', realMatter, (req, res) => {
    res.send('My Secret: Wach likes playing with thoughts!')
})

app.get('/', (req, res) => {
    res.send('Home Page!');
})


app.use((err, req, res, next) => {
    const { message = 'Opps, something went wrong', status = 500 } = err;
    res.status(status).send(message)
})

app.listen(4000, () => {
    console.log('Yo Wach, your server is running')
})