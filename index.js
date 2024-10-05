
require('dotenv').config();
const express = require("express");
const { dbConnection } = require('./Databases/config');

const { APP_PORT } = process.env

const app = express();

dbConnection();

const routerPost = require("./Tweet/Router/apiRouter");
const routerAuth = require("./Auth/Router/apiRouter");
const routerFollow = require("./Follow/Router/apiRouter");


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', routerPost);
app.use('/api', routerAuth);
app.use('/api', routerFollow);

app.listen(APP_PORT, () => {
    console.log(`[INFO] SERVER RUNNING A ${APP_PORT}`);
});
