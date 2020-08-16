const express = require('express');
const mongoose = require('mongoose');

const bugs = require('./routes/api/bug')
const app = express();
const uri = "mongodb+srv://TryfanEvans:easyfull@bugtracker.b1tye.mongodb.net/BugTracker?retryWrites=true&w=majority";


app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST,HEAD, OPTIONS,PUT, DELETE, PATCH");
    next();
});


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error));

app.use('/api/bug', bugs)
const port = process.env.port || 5000

app.listen(port, () => console.log(`Server start ${port} `))