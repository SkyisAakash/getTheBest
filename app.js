const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./private/keys').mongoURI;
const passport = require('passport');
const users = require("./routes/api/users");
const categories = require("./routes/api/categories");
const bodyParser = require('body-parser');

mongoose.connect(db)
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./private/passport')(passport);
// process.stdout.write('\033c');//clears console everytime
// app.get("/", (req, res) => res.send("Hello best app"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening to port ${port}`));
app.use("/api/users", users); 
app.use("/api/categories", categories);

