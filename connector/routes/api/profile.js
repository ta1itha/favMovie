// The USERS Route
const express = require('express');

const router = express.Router();

// GET Profile
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;