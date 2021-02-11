const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const comments = [
    {
        username: 'Wach',
        comment: 'I love JavaScript'
    },
    {
        username: 'Kaka',
        comment: 'So, its from my mouth you want to hear that okro soup used to draw?'
    },
    {
        username: 'Broma',
        comment: 'When others are saying "God when?", oga is saying "God what next?"'
    },
    {
        username: 'Obinna',
        comment: 'Sleep is for the weak'
    },
    {
        username: 'Obozor',
        comment: 'Place your hand on your chest and repeat after me: \"I will not date a broke girl\"'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.listen(port, () => {
    console.log('Listening on port 3000!');
})