const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./routes/api/users');
const job = require('./routes/api/jobs')
const admin = require('./routes/api/admins');
const loginAuth = require('./routes/api/loginAuth');

const app = express();



// Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI; 

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/users', user);
app.use('/api/jobs', job);
app.use('/api/admins', admin);
app.use('/api/loginAuth', loginAuth);

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server started on port ${port}`));