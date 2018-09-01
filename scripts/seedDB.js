const mongoose = require('mongoose');
const categoryDb = require('../models/Category');
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

categoryDb
    .deleteMany({})
    .then(() => categoryDb.insertMany(categoriesSeed))
    .then((data) => {
        console.log(data.length + ' categories inserted')
        process.exit(0)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })