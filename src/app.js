const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const Gebruiker = require('./models/Gebruiker');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', function (req, res) {
    console.log('Winkel');
});

app.get('/gebruikers', async (req, res) => {
    try{
        const gebruiker = await Gebruiker.find();
        console.log(req);
    }
    catch(err){
        console.log(err);
    }
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on http://127.0.0.1:${process.env.PORT}`);
        });
    })
    .catch((err) => console.error(`Failed to connect to database. Error: ` + err));