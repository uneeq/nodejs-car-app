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

// mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://nikita-user:nikita-password@nodejs.nzsos.mongodb.net/test', { useNewUrlParser: true });


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!");
// });

// app.use((req, _res, next) => {
//     console.log(`${req.method} request for ${req.url}`);
//     next();
// });

// app.get("/dictionary", (req, res) => {
//     res.json(skiTerms);
// });

// app.post("/dictionary", bodyParser.json(), (req, res)=>{

//     // skiTerms.push(req.body);
//     // save();
//     res.json({
//         status: "success",
//         term: req.body
//     });
// });
// app.delete("/dictionary/:term", (req, res) => {
//     skiTerms = skiTerms.filter(def => def.term !== req.params.term);
//     // save();

//     res.json({
//         status: "success",
//         removed: req.params.term,
//         newLength: skiTerms.length
//     });

// });

// app.listen(3000, ()=>{
//     console.log('Dvelp App is working');
// });