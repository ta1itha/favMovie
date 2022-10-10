const express = require('express');
const dbConnect = require('./config/db');
require('dotenv').config();
const app = express();

dbConnect();

// Init Middleware
app.use(express.json({ extended: false}));


const port = process.env.PORT || 3000;

app.get('/', (req,res)=> res.send('API UP!'));

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/favorites', require('./routes/api/favorites'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
