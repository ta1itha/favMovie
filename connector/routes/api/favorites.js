// The USERS Route
const express = require('express');

const router = express.Router();

// GET Favorites
router.get('/', (req, res) => res.send('Favorites route'));

module.exports = router;