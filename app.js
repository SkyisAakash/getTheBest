const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./private/keys').mongoURI;
const passport = require('passport');
const users = require("./routes/api/users");
const categories = require("./routes/api/categories");
const businesses = require("./routes/api/businesses");
const services = require("./routes/api/services");
const reviews = require("./routes/api/reviews");
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

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
app.use("/api/businesses", businesses);
app.use("/api/services", services);
app.use("/api/reviews", reviews);

