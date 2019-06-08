const express = require('express');
const axios = require('axios');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60000 }
}))

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('Db connected')
    })

const port = process.env.PORT || 7070;

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})  

app.get('/api/ping', (req, res, next)=>{
    res.send("this works")
})