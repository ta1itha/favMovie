// The USERS Route
const express = require('express');

const router = express.Router();

// GET USERS
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;