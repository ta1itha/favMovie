// The USERS Route
const express = require('express');

const router = express.Router();
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


// Register Users
router.post(
  "/",
  // validation
  [check("username", "User name is required").not().isEmpty(),
   check("email", "Email must be valid").isEmail(),
   check("password", "Please enter a strong password").isLength({ min: 5 }),
],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        // get avatar for user or use default avatar if there is not an account associated with the email address
        const avatar = gravatar.url(email, {
            s: '100',
            r: 'pg',
            d: 'mm'
        })

        // create a new user
        user = new User({
            username,
            email,
            password,
            avatar
        });

        // encrypt password
        const salt = await bcrypt.genSaltSync(10);
        user.password = await bcrypt.hashSync(password, salt);

        // save the user to the db
        await user.save();

        // return jsonwebtoken associated with user id
        const payload = {
            user: {
                id: user.id
            }
        }

        //jwt.sign()



        res.send('User registered');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
  }
);

module.exports = router;
