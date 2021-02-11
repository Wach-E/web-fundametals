const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected the db');
    })
    .catch((wahala) => {
        console.log(`Opps, this is your error: ${wahala}`)
    });

// Define the Schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: Number,
    review: String
})

// Define the model
const Movie = mongoose.model('Movie', movieSchema);

// Instanse of the model
// const wach = new Movie({
//     title: "Wach",
//     year: 1998,
//     rating: 6.5,
//     review: "Trying with little works",
// })

// Function to save model

// async function wachy() {
//     await wach.save()
//     console.log('Wach data saved');
// }

// wachy()

Movie.insertMany([
    {
        title: "Wach",
        year: 1998,
        rating: 6.5,
        review: "Trying with little works",
    },
    {
        title: "Kaka",
        year: 1998,
        rating: 6.9,
        review: "I have a wonderful friend",
    },
    {
        title: "Obinna",
        year: 1997,
        rating: 7.5,
        review: "Sleep is for the weak!",
    },
    {
        title: "Broma",
        year: 1997,
        rating: 5.5,
        review: "Omoh eh... wetin dey sup",
    }
])
    .then(data => {
        console.log("Saved your data bro!!! Here it is:")
        console.log(data)
    })
    .catch(err => {
        console.log("")
    })