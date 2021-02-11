const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('wach'));

app.get('/awesome', (req, res) => {
    const { name } = req.cookies;
    res.send(`Hello boss ${name}`)
})

app.get('/setcookie', (req, res) => {
    res.cookie('name', 'Vany')
    res.send('Cookie has received!')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'Apple', { signed: true })
    res.send('Signed cookie recieved!')
})

app.get('/verifycookie', (req, res) => {
    console.log(req.cookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('Server on 🔥')
})