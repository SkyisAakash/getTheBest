const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./private/keys').mongoURI;
const passport = require('passport');
mongoose.connect(db)
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.log(err));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./private/passport')(passport);
// process.stdout.write('\033c');//clears console everytime
// app.get("/", (req, res) => res.send("Hello best app"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening to port ${port}`));
const users = require("./routes/api/users");
app.use("/api/users", users); 
const categories = require("./routes/api/categories");
app.use("api/categories", categories);

