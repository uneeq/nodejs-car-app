const express = require("express");
const bodyParser = require("body-parser");
const env = process.env.NODE_ENV || 'development',
	envConfig = require('./server/env')[env];

const app = express();

require("./database/index");

app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

require("./server/routes")(app);

app.listen(envConfig.port, ()=>{
    console.log(`Server listening on port ${envConfig.port}`);
});