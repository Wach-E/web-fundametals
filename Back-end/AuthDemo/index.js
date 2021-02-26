const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const User = require('./models/user');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

const sessionConfig = { secret: 'Wach secret', resave: 'false', saveUninitialized: 'false' };

mongoose.connect('mongodb://localhost:27017/auth-demo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('Database connected!!')
    })
    .catch(err => {
        console.log('Mongo connection error occured!');
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send(`Added a user to db`);
});

app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        return res.redirect('/secret');
        // res.send(`You're welcome ${username}`);
    } else {
        res.redirect('/login');
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({
        username, password
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('This is topsecret');
})

app.listen(2000, () => {
    console.log('Server is running');
})