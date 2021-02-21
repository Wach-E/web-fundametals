const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const User = require('./models/user');
const path = require('path');
const bcrypt = require('bcrypt');

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

app.get('/', (req, res) => {
    const username = req.body.username;
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
    const user = await User.findOne({ username: username });
    const valadateUser = await bcrypt.compare(password, user.password);
    if (valadateUser) {
        res.send(`You're welcome ${username}`);
    } else (
        res.send('Userame or password incorrect')
    )
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash
    });
    await user.save();
    res.redirect('/');
})

app.get('/secret', (req, res) => {
    res.send('This is SECRET!');
})

app.listen(2000, () => {
    console.log('Server is running');
})