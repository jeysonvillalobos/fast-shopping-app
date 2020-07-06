const express  = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require('./router');


app.use(router);


app.listen(8080);