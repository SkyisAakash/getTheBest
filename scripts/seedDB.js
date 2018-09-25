const mongoose = require('mongoose');
const categoryDb = require('../models/Category');
const businessDb = require('../models/Business');
const serviceDb = require('../models/Service');
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

serviceDb.deleteMany({}).then(() => console.log("deleted services"))
businessDb.deleteMany({}).then(() => console.log("deleted businesses"))