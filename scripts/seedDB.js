const mongoose = require('mongoose');
const db = require('../models');
const remoteDb = require('../private/keys').mongoURI;
mongoose.Promise = global.Promise;
mongoose.connect(remoteDb)

const categoriesSeed = [
    {
        title: 'Food',
        image: '',
        services: []
    },
    {
        title: 'Entertainment',
        image: '',
        services: []
    },
    {
        title: 'LGBTq',
        image: '',
        services: []
    }
]

db.Category
    .remove({})
    .then(() => db.Category.insertMany(categoriesSeed))
    .then((data) => {
        console.log(data.insertIds.length + 'categories inserted')
        process.exit(0)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })