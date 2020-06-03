const express = require('express');
const connectDB = require('./config/db');
const path = require('path')

const app = express();

connectDB();

app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


module.exports = app;