const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All dogs');
})

router.post('/:id/new', (req, res) => {
    res.send('Creating new dog');
})

router.get('/:id', (req, res) => {
    res.send('Viewing a dog');
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing a dog');
})

module.exports = router;
