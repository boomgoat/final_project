const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./routes/api/users');
const job = require('./routes/api/jobs');
const service = require('./routes/api/services');
const admin = require('./routes/api/admins');
const brand = require('./routes/api/brands');
const loginAuth = require('./routes/api/loginAuth');
const bids = require('./routes/api/bids');

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
app.use('/api/services', service);
app.use('/api/admins', admin);
app.use('/api/brands', brand);
app.use('/api/loginAuth', loginAuth);
app.use('/api/bids', bids);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server started on port ${port}`));
