const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('Sorry, you\'re ot and admin');
})
router.get('/admincase', (req, res) => {
    res.send('Admin stuff');
})

router.get('/rundelete', (req, res) => {
    res.send('Deleting stuffs');
})

module.exports = router;
