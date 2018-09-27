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
        image: 'https://i.postimg.cc/05LFSRG2/food.jpg',
        services: []
    },
    {
        title: 'Entertainment',
        image: 'https://i.postimg.cc/qMDrSZyP/entertainment.jpg',
        services: []
    },
    {
        title: 'LGBTq',
        image: 'https://i.postimg.cc/cCZDDZFQ/lgbtq.jpg',
        services: []
    },
    {
        title: 'Living',
        image: 'https://i.postimg.cc/XJDJL7jP/living.jpg',
        services: []
    },
    {
        title: 'Travel',
        image: 'https://i.postimg.cc/MHF9zRWY/travel.jpg',
        services: []
    },
    {
        title: 'Fashion',
        image: 'https://i.postimg.cc/fbWSvbnc/fashion.jpg',
        services: []
    },
    {
        title: 'Education',
        image: 'https://i.postimg.cc/yNC7yQM0/education.jpg',
        services: []
    },
    {
        title: 'Art',
        image: 'https://i.postimg.cc/0yWB8bfj/art.jpg',
        services: []
    },
    {
        title: 'Kids',
        image: 'https://i.postimg.cc/wjmmBr5N/kids.jpg',
        services: []
    },
    {
        title: 'Pets',
        image: 'https://i.postimg.cc/MKjT0Qc2/pets.jpg',
        services: []
    },
    {
        title: 'Fitness',
        image: 'https://i.postimg.cc/T2b1gb58/fitness.jpg',
        services: []
    },
    {
        title: 'Sports',
        image: 'https://i.postimg.cc/SNpsrKcn/sports.jpg',
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