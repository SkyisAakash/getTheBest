const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.get("/", (req, res) => res.send("Hello best app"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening to port ${port}`));
const users = require("./routes/api/users");
app.use("/api/users", users); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
