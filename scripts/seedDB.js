const mongoose = require('mongoose');
const db = require('../models');
const remoteDb = require('../private/keys').mongoURI;
mongoose.Promise = global.Promise;
mongoose.connect(remoteDb)

const categoriesSeed = [
    {
        title: 'Food',
        description: 'Best food in town',
        
    }
]