const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('Db connected')
    })

const port = 7070 || process.env.PORT

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})