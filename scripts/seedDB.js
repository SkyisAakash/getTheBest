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
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user2 =  new User({
                email: "lisaschlemmer",
                password: "user123",
                firstname: "Lisa",
                lastname: "Schlemmer",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user3 =  new User({
                email: "markhurkman@gmail.com",
                password: "user123",
                firstname: "Mark",
                lastname: "Hurkman",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user4 =  new User({
                email: "dcasolano@gmail.com",
                password: "user123",
                firstname: "Daniel",
                lastname: "Casolano",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user5 =  new User({
                email: "jorjeselenas@gmail.com",
                password: "user123",
                firstname: "Jorje",
                lastname: "Selenas",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user6 =  new User({
                email: "siabarber@gmail.com",
                password: "user123",
                firstname: "Sia",
                lastname: "Barber",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user7 =  new User({
                email: "lockhalgart@gmail.com",
                password: "user123",
                firstname: "Lock",
                lastname: "Halgart",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user8 =  new User({
                email: "lillyobroi@gmail.com",
                password: "user123",
                firstname: "Lilly",
                lastname: "Obroi",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user9 =  new User({
                email: "lisaalvara@gmail.com",
                password: "user123",
                firstname: "Lisa",
                lastname: "Alvara",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user10 =  new User({
                email: "miaballer@gmail.com",
                password: "user123",
                firstname: "Mia",
                lastname: "Baller",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })
let user11 =  new User({
                email: "demouser@gmail.com",
                password: "demouser123",
                firstname: "Demo",
                lastname: "User",
                image: "https://i.postimg.cc/4NzGxYSg/user.gif"
            })

let business1 = new Business({
                title: "Sky's Fashion",
                address: "San Francisco, CA, USA",
                owner: user1._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business2 = new Business({
                title: "Healing Experts",
                address: "San Jose, CA, USA",
                owner: user2._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business3 = new Business({
                title: "Education First",
                address: "Fremont, CA, USA",
                owner: user3._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business4 = new Business({
                title: "Fun Corner",
                address: "Menlo Park, CA, USA",
                owner: user4._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
            })
let business5 = new Business({
                title: "Health Experts",
                address: "Morgan Hills, CA, USA",
                owner: user5._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
                // businessHoursStart: Date,
                // businessHoursEnd: Date,
})
let business6 = new Business({
                title: "Pets Smart",
                address: "Santa Cruz, CA, USA",
                owner: user6._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business7 = new Business({
                title: "Food Specialists",
                address: "Santa Cruz, CA, USA",
                owner: user7._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business8 = new Business({
                title: "Skyhigh Builders",
                address: "Santa Clara, CA, USA",
                owner: user7._id,
                image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business9 = new Business({
    title: "Pet smart",
    address: "Santa Clara, CA, USA",
    owner: user7._id,
    image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business10 = new Business({
    title: "Back to School",
    address: "Santa Clara, CA, USA",
    owner: user8._id,
    image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business11 = new Business({
    title: "Back to School",
    address: "Santa Clara, CA, USA",
    owner: user9._id,
    image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business12 = new Business({
    title: "Kids land",
    address: "Santa Clara, CA, USA",
    owner: user9._id,
    image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business13 = new Business({
    title: "City Sports Gym",
    address: "Santa Clara, CA, USA",
    owner: user10._id,
    image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let business14 = new Business({
    title: "Play Hard Enterprise",
    address: "Santa Clara, CA, USA",
    owner: user10._id,
    image: "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
})
let service1 = new Service({
    title: "KonJoe Burger",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/fb4q6Dr3/burger.jpg",
    owner: user1._id,
    category: category1.title,
    business: business7._id
})
business7.services.push(service1)
let service2 = new Service({
    title: "Korean Barbeque",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/h4CyK9YR/korean_barbeque.jpg",
    owner: user1._id,
    category: category1.title,
    business: business7._id
})
business7.services.push(service2)
let service3 = new Service({
    title: "Trevor's Comedy Club",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/ZnqwrRCQ/comedy_club.jpg",
    owner: user1._id,
    category: category2.title,
    business: business4._id
})
business4.services.push(service3)
let service4 = new Service({
    title: "EMC Cinemas",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/pdDcv4ws/cinema.jpg",
    owner: user1._id,
    category: category2.title,
    business: business4._id
})
business4.services.push(service4)
let service5 = new Service({
    title: "Peets Bar and Club",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/FsR6SPSK/bar.jpg",
    owner: user1._id,
    category: category3.title,
    business: business4._id
})
business4.services.push(service5)
let service6 = new Service({
    title: "Style with Pride",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/zX6xgq5d/pride.jpg",
    owner: user1._id,
    category: category3.title,
    business: business1._id
})
business1.services.push(service6)
let service7 = new Service({
    title: "Best Builders",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/dtxxj8Rj/builders.jpg",
    owner: user1._id,
    category: category4.title,
    business: business8._id
})
business8.services.push(service7)
let service8 = new Service({
    title: "Real Estate Experts",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/BnFM5RnJ/real_estate.jpg",
    owner: user1._id,
    category: category4.title,
    business: business8._id
})
business8.services.push(service8)
let service9 = new Service({
    title: "Vacation Planners",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/g0P4g4x8/vacation.jpg",
    owner: user1._id,
    category: category5.title,
    business: business7._id
})
business8.services.push(service9)
let service10 = new Service({
    title: "Book my ride",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/MHrdtSBp/flight.jpg",
    owner: user1._id,
    category: category5.title,
    business: business4._id
})
business4.services.push(service10)
let service11 = new Service({
    title: "Nike",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/BQXhbjWL/nike.jpg",
    owner: user1._id,
    category: category6.title,
    business: business1._id
})
business1.services.push(service11)
let service12 = new Service({
    title: "Clothing Experts",
    description: "",
    price: 3,
    address: "",
    image:"https://i.postimg.cc/3RYSx97Y/clothing.jpg",
    owner: user1._id,
    category: category6.title,
    business: business1._id
})
business1.services.push(service12)
let service13 = new Service({
    title: "Dogs saloon",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/vBtp78Pk/dog.jpg",
    owner: user1._id,
    category: category10.title,
    business: business9._id
})
business9.services.push(service13)
let service14 = new Service({
    title: "Cat grooming",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/L5RmR07K/cat.jpg",
    owner: user1._id,
    category: category10.title,
    business: business9._id
})
business9.services.push(service14)
let service15 = new Service({
    title: "Luls's Stationary",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/BQKBR73Q/stationery.jpg",
    owner: user1._id,
    category: category7.title,
    business: business10._id
})
business10.services.push(service15)
let service16 = new Service({
    title: "Art Suppliers",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/RFpTxjqq/art.jpg",
    owner: user1._id,
    category: category7.title,
    business: business10._id
})
business10.services.push(service16)
let service17 = new Service({
    title: "Sclupture Hub",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/x8TQCz6C/sculpture.jpg",
    owner: user10._id,
    category: category8.title,
    business: business11._id
})
business11.services.push(service17)
let service18 = new Service({
    title: "Fountains plaza",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/mD4RvqM7/fountain.jpg",
    owner: user10._id,
    category: category8.title,
    business: business11._id
})
business11.services.push(service18)
let service19 = new Service({
    title: "Toys Story Land",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/k5Kqh9Vn/toystory.jpg",
    owner: user10._id,
    category: category9.title,
    business: business12._id
})
business12.services.push(service19)
let service20 = new Service({
    title: "Disney Store",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/W1Qsnt1W/disney_store.jpg",
    owner: user10._id,
    category: category9.title,
    business: business12._id
})
business12.services.push(service20)
let service21 = new Service({
    title: "Gym by the beach",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/pVZXH2sr/beach_gym.jpg",
    owner: user10._id,
    category: category11.title,
    business: business13._id
})
business13.services.push(service21)
let service22 = new Service({
    title: "Downtown Workouts",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/289k10Rf/gym_downtown.jpg",
    owner: user10._id,
    category: category11.title,
    business: business14._id
})
business14.services.push(service22)
let service23 = new Service({
    title: "Horse dealers",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/vmVZFfKw/horse.jpg",
    owner: user10._id,
    category: category12.title,
    business: business13._id
})
business13.services.push(service23)
let service24 = new Service({
    title: "Bowling Alley",
    description: "",
    price: 3,
    address: "",
    image: "https://i.postimg.cc/pL7L6qqB/bowling.jpg",
    owner: user10._id,
    category: category12.title,
    business: business14._id
})
business14.services.push(service24)

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
const businessesSeed = [business1, business2, business3, business4, business5, business6, business7, business8, business9, business10, business11, business12, business13, business14]
const userSeed = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11]
const servicesSeed = [service1, service2, service3, service4, service5, service6, service7, service8, service9, service10, service11, service12, service13, service14, service15, service16, service17, service18, service19, service20, service21, service22, service23, service24]
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