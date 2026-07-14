const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Phone = require("./models/Phone");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log("Connected to MongoDB");

    await Phone.deleteMany({});

    await Phone.insertMany([
        {
            brand: "Samsung",
            model: "Galaxy S25 Ultra",
            price: 1200,
            ram: 12,
            storage: 512,
            battery: 5000,
            image: "galaxy-s25-ultra.jpg"
        },
        {
            brand: "Samsung",
            model: "Galaxy A56",
            price: 499,
            ram: 8,
            storage: 256,
            battery: 5000,
            image: "galaxy-a56.jpg"
        },
        {
            brand: "Apple",
            model: "iPhone 17 Pro Max",
            price: 1599,
            ram: 12,
            storage: 512,
            battery: 4700,
            image: "iphone17promax.jpg"
        },
        {
            brand: "Apple",
            model: "iPhone 16",
            price: 999,
            ram: 8,
            storage: 256,
            battery: 4200,
            image: "iphone16.jpg"
        },
        {
            brand: "Google",
            model: "Pixel 10 Pro",
            price: 1199,
            ram: 12,
            storage: 256,
            battery: 5050,
            image: "pixel10pro.jpg"
        },
        {
            brand: "Google",
            model: "Pixel 9a",
            price: 499,
            ram: 8,
            storage: 128,
            battery: 5000,
            image: "pixel9a.jpg"
        },
        {
            brand: "OnePlus",
            model: "13",
            price: 899,
            ram: 16,
            storage: 512,
            battery: 6000,
            image: "oneplus13.jpg"
        },
        {
            brand: "Xiaomi",
            model: "15 Ultra",
            price: 999,
            ram: 16,
            storage: 512,
            battery: 5410,
            image: "xiaomi15ultra.jpg"
        },
        {
            brand: "Redmi",
            model: "Note 14 Pro",
            price: 399,
            ram: 8,
            storage: 256,
            battery: 5000,
            image: "redminote14pro.jpg"
        },
        {
            brand: "POCO",
            model: "F7 Pro",
            price: 599,
            ram: 12,
            storage: 256,
            battery: 6000,
            image: "pocof7pro.jpg"
        },
        {
            brand: "Infinix",
            model: "Note 50 Pro",
            price: 329,
            ram: 12,
            storage: 256,
            battery: 5200,
            image: "note50pro.jpg"
        },
        {
            brand: "Infinix",
            model: "GT 30 Pro",
            price: 449,
            ram: 12,
            storage: 512,
            battery: 5500,
            image: "gt30pro.jpg"
        },
        {
            brand: "Itel",
            model: "S25 Ultra",
            price: 169,
            ram: 8,
            storage: 256,
            battery: 5000,
            image: "itel-s25-ultra.jpg"
        },
        {
            brand: "Nothing",
            model: "Phone (3)",
            price: 799,
            ram: 12,
            storage: 256,
            battery: 5150,
            image: "nothing3.jpg"
        },
        {
            brand: "Motorola",
            model: "Edge 60 Pro",
            price: 699,
            ram: 12,
            storage: 512,
            battery: 6000,
            image: "edge60pro.jpg"
        },
        {
            brand: "Honor",
            model: "Magic 7 Pro",
            price: 1099,
            ram: 16,
            storage: 512,
            battery: 5850,
            image: "magic7pro.jpg"
        },
        {
            brand: "Oppo",
            model: "Find X8 Pro",
            price: 1199,
            ram: 16,
            storage: 512,
            battery: 5910,
            image: "findx8pro.jpg"
        },
        {
            brand: "Vivo",
            model: "X200 Pro",
            price: 1099,
            ram: 16,
            storage: 512,
            battery: 6000,
            image: "x200pro.jpg"
        },
        {
            brand: "Tecno",
            model: "Camon 40 Premier",
            price: 499,
            ram: 12,
            storage: 256,
            battery: 5100,
            image: "tecno40premier.jpg"
        },
        {
            brand: "Tecno",
            model: "Spark 30 Pro",
            price: 229,
            ram: 8,
            storage: 256,
            battery: 5000,
            image: "spark30pro.jpg"
        }
    ]);

    console.log("Database seeded successfully!");

    mongoose.connection.close();
})
.catch(err => {
    console.error(err);
});