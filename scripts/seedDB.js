const mongoose = require('mongoose');
const categoryDb = require('../models/Category');
const businessDb = require('../models/Business');
const serviceDb = require('../models/Service');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const remoteDb = require('../private/keys').mongoURI;
mongoose.Promise = global.Promise;
mongoose.connect(remoteDb)


let category1 = new Category({
        title: 'Food',
        image: 'https://i.postimg.cc/05LFSRG2/food.jpg',
        services: []
    })
let category2 = new Category({
        title: 'Entertainment',
        image: 'https://i.postimg.cc/qMDrSZyP/entertainment.jpg',
        services: []
    })
let category3 = new Category({
        title: 'LGBTq',
        image: 'https://i.postimg.cc/cCZDDZFQ/lgbtq.jpg',
        services: []
    })
let category4 = new Category({
        title: 'Living',
        image: 'https://i.postimg.cc/XJDJL7jP/living.jpg',
        services: []
    })
let category5 = new Category({
        title: 'Travel',
        image: 'https://i.postimg.cc/MHF9zRWY/travel.jpg',
        services: []
    })
let category6 = new Category({
        title: 'Fashion',
        image: 'https://i.postimg.cc/fbWSvbnc/fashion.jpg',
        services: []
    })
let category7 = new Category({
        title: 'Education',
        image: 'https://i.postimg.cc/yNC7yQM0/education.jpg',
        services: []
    })
let category8 = new Category({
        title: 'Art',
        image: 'https://i.postimg.cc/0yWB8bfj/art.jpg',
        services: []
    })
let category9 = new Category({
        title: 'Kids',
        image: 'https://i.postimg.cc/wjmmBr5N/kids.jpg',
        services: []
    })
let category10 = new Category({
        title: 'Pets',
        image: 'https://i.postimg.cc/MKjT0Qc2/pets.jpg',
        services: []
    })
let category11 = new Category({
        title: 'Fitness',
        image: 'https://i.postimg.cc/T2b1gb58/fitness.jpg',
        services: []
    })
let category12 = new Category({
        title: 'Sports',
        image: 'https://i.postimg.cc/SNpsrKcn/sports.jpg',
        services: []
})


let user1 =  new User({
                email: "alexclover@gmail.com",
                password: "user123",
                firstname: "Alex",
                lastname: "Clover",
            })
let user2 =  new User({
                email: "lisaschlemmer",
                password: "user123",
                firstname: "Lisa",
                lastname: "Schlemmer",
            })
let user3 =  new User({
                email: "markhurkman@gmail.com",
                password: "user123",
                firstname: "Mark",
                lastname: "Hurkman",
            })
let user4 =  new User({
                email: "dcasolano@gmail.com",
                password: "user123",
                firstname: "Daniel",
                lastname: "Casolano",
            })
let user5 =  new User({
                email: "jorjeselenas@gmail.com",
                password: "user123",
                firstname: "Jorje",
                lastname: "Selenas",
            })
let user6 =  new User({
                email: "siabarber@gmail.com",
                password: "user123",
                firstname: "Sia",
                lastname: "Barber",
            })
let user7 =  new User({
                email: "lockhalgart@gmail.com",
                password: "user123",
                firstname: "Lock",
                lastname: "Halgart",
            })
let user8 =  new User({
                email: "lillyobroi@gmail.com",
                password: "user123",
                firstname: "Lilly",
                lastname: "Obroi",
            })
let user9 =  new User({
                email: "lisaalvara@gmail.com",
                password: "user123",
                firstname: "Lisa",
                lastname: "Alvara",
            })
let user10 =  new User({
                email: "miaballer@gmail.com",
                password: "user123",
                firstname: "Mia",
                lastname: "Baller",
            })
let user11 =  new User({
                email: "demouser@gmail.com",
                password: "demouser123",
                firstname: "Demo",
                lastname: "User"
            })

let business1 = new Business({
                title: "Sky's Fashion",
                address: "San Francisco, CA, USA",
                owner: user1._id,
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business2 = new Business({
                title: "Healing Experts",
                address: "San Jose, CA, USA",
                owner: user2._id,
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business3 = new Business({
                title: "Education First",
                address: "Fremont, CA, USA",
                owner: user3._id,
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business4 = new Business({
                title: "Fun Corner",
                address: "Menlo Park, CA, USA",
                owner: user4._id,
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business5 = new Business({
                title: "Health Experts",
                address: "Morgan Hills, CA, USA",
                owner: user5._id,
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
})
let business6 = new Business({
                title: "Pets Smart",
                address: "Santa Cruz, CA, USA",
                owner: user6._id
})
let business7 = new Business({
                title: "Food Specialists",
                address: "Santa Cruz, CA, USA",
                owner: user7._id
})
let business8 = new Business({
                title: "Skyhigh Builders",
                address: "Santa Clara, CA, USA",
                owner: user7._id
})

let service1 = new Service({
    title: "KonJoe Burger",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category1.title,
    business: business7._id
})
let service2 = new Service({
    title: "Korean Barbeque",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category1.title,
    business: business7._id
})
let service3 = new Service({
    title: "Trevor's Comedy Club",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category2.title,
    business: business4._id
})
let service4 = new Service({
    title: "EMC Cinemas",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category2.title,
    business: business4._id
})
let service5 = new Service({
    title: "Peets Bar and Club",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category3.title,
    business: business4._id
})
let service6 = new Service({
    title: "Style with Pride",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category3.title,
    business: business1._id
})
let service7 = new Service({
    title: "Best Builders",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category4.title,
    business: business8._id
})
let service8 = new Service({
    title: "Real Estate Experts",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category4.title,
    business: business8._id
})
let service9 = new Service({
    title: "Vacation Planners",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category5.title,
    business: business7._id
})
let service10 = new Service({
    title: "Book my ride",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category5.title,
    business: business4._id
})
let service11 = new Service({
    title: "Nike",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category6.title,
    business: business1._id
})
let service12 = new Service({
    title: "Clothing Experts",
    description: "",
    price: 3,
    address: "",
    owner: user1._id,
    category: category6.title,
    business: business1._id
})

const createUsers = (user, idx) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            newUser = new User(user);
            newUser.save();
            return newUser;
        })
    })
}

const categoriesSeed = [category1, category2, category3, category4, category5, category6, category7, category8, category9, category10, category11, category12]
const businessesSeed = [business1, business2, business3, business4, business5, business6, business7, business8]
const userSeed = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11]
const servicesSeed = [service1, service2, service3, service4, service5, service6, service7, service8, service9, service10, service11, service12]
businessDb
    .deleteMany({})
    .then(() => businessDb.insertMany(businessesSeed))
    .then((data) => {
        console.log(data.length + ' businesses inserted')
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })


categoryDb
    .deleteMany({})
    .then(() => categoryDb.insertMany(categoriesSeed))
    .then((data) => {
        console.log(data.length + ' categories inserted')
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

serviceDb
    .deleteMany({})
    .then(() => serviceDb.insertMany(servicesSeed))
    .then((data) => {
        console.log(data.length + ' services inserted')
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

User.deleteMany({})
    .then(() => userSeed.forEach((user, idx) => createUsers(user, idx)))