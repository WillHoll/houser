require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

const app = express();
app.use(express.json());

app.get('/api/houses', ctrl.getHouses)
app.post('/api/house', ctrl.makeHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database connected')
    app.listen(SERVER_PORT, () => console.log(`MY POWER! IT'S OVER ${SERVER_PORT}`))
})