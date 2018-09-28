const mongoose = require('mongoose');
const categoryDb = require('../models/Category');
const businessDb = require('../models/Business');
const serviceDb = require('../models/Service');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
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

const createUsers = user => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            newUser = new User(user);
            newUser.save();
            return newUser;
        })
    })
}

let userSeed = [
            {
                email: "alexclover@gmail.com",
                password: "user123",
                firstname: "Alex",
                lastname: "Clover",
            },
            {
                email: "lisaschlemmer",
                password: "user123",
                firstname: "Lisa",
                lastname: "Schlemmer",
            },
            {
                email: "markhurkman@gmail.com",
                password: "user123",
                firstname: "Mark",
                lastname: "Hurkman",
            },
            {
                email: "dcasolano@gmail.com",
                password: "user123",
                firstname: "Daniel",
                lastname: "Casolano",
            },
            {
                email: "jorjeselenas@gmail.com",
                password: "user123",
                firstname: "Jorje",
                lastname: "Selenas",
            },
            {
                email: "siabarber@gmail.com",
                password: "user123",
                firstname: "Sia",
                lastname: "Barber",
            },
            {
                email: "lockhalgart@gmail.com",
                password: "user123",
                firstname: "Lock",
                lastname: "Halgart",
            },
            {
                email: "lillyobroi@gmail.com",
                password: "user123",
                firstname: "Lilly",
                lastname: "Obroi",
            },
            {
                email: "lisaalvara@gmail.com",
                password: "user123",
                firstname: "Lisa",
                lastname: "Alvara",
            },
            {
                email: "miaballer@gmail.com",
                password: "user123",
                firstname: "Mia",
                lastname: "Baller",
            },
            {
                email: "demouser@gmail.com",
                password: "demouser123",
                firstname: "Demo",
                lastname: "User"
            }
        ]

categoryDb
    .deleteMany({})
    .then(() => categoryDb.insertMany(categoriesSeed))
    .then((data) => {
        console.log(data.length + ' categories inserted')
        // process.exit(0)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

User.deleteMany({})
.then(() => 
    userSeed.forEach(user => createUsers(user)))




//         businessSeed = [
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[0]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             },
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[1]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             },
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[2]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             },
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[3]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             },
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[4]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             },
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[5]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             },
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[6]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             },
//             {
//                 title: "",
//                 address: "",
//                 owner: mongoose.Types.ObjectId(data[7]._id),
//                 // businessHoursStart: Date,
//                 // businessHoursEnd: Date,
//             }
//         ]

//     .catch((err) => {
//         console.error(err)
//         process.exit(1)
//     })

// businessDb
//     .deleteMany({})
//     .then(() => businessDb.insertMany(businessesSeed))
//     .then((data) => {
//         console.log(data.length + ' categories inserted')
//         process.exit(0)
//     })
//     .catch((err) => {
//         console.error(err)
//         process.exit(1)
//     })

serviceDb.deleteMany({}).then(() => console.log("deleted services"))
businessDb.deleteMany({}).then(() => console.log("deleted businesses"))